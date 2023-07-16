import "./App.css";
import { useState, useEffect } from "react";
import { getTodoList, addItem, updateTodoItemData } from "./firebase";
import { Box, Typography, TextField, Button } from "@mui/material";

function App() {
  const [taskName, setTaskName] = useState("");
  const [todo, setTodo] = useState([]);

  // GET ITEMS

  const getAllTasks = () => {
    getTodoList().then((data) => {
      setTodo(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getAllTasks();
    console.log(process.env.REACT_APP_DOMAIN);
  }, []);

  // ADD ITEM

  const addTodo = () => {
    const newItem = {
      title: taskName,
      description: "",
      date: Date.now(),
      done: false,
    };

    addItem(newItem).then(() => {
      getAllTasks();
      setTaskName("");
    });
  };

  const isDone = (item) => {
    updateTodoItemData(item.id, { done: !item.done }).then(() => getAllTasks());
  };

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
          <TextField
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <Button
            variant="contained"
            style={{ marginLeft: "5px" }}
            color="primary"
            onClick={() => {
              addTodo();
            }}
          >
            +
          </Button>
        </Box>
        <Box>
          {todo.map((item, index) => {
            return (
              <Typography
                key={index}
                onClick={() => {
                  isDone(item);
                }}
                style={{
                  textDecoration: item.done ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {item.title}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
