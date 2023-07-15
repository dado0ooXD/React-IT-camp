import "./App.css";
import { useState, useEffect } from "react";
import { getTodoList } from "./firebase";
import { Box, Typography, TextField, Button } from "@mui/material";

function App() {
  const [taskName, setTaskName] = useState("");
  const [todo, setTodo] = useState([]);

  const getAllTasks = () => {
    getTodoList().then((data) => {
      setTodo(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        style={{
          background: "#c3c3c3",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h4">Todo List</Typography>
        <Box display="flex" marginTop="15px">
          <TextField type="text" />
          <Button
            variant="contained"
            style={{ marginLeft: "5px" }}
            color="primary"
          >
            +
          </Button>
        </Box>
        <Box>
          {todo.map((item, index) => (
            <Typography>{ item.title}</Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
