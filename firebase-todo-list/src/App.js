import "./App.css";
import { useState, useEffect } from "react";
import { getTodoList, addItem, updateTodoItemData, deleteItem } from "./firebase";
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
    // console.log(process.env.REACT_APP_DOMAIN);
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


  // UPDATE
  const isDone = (item) => {
    updateTodoItemData(item.id, { done: !item.done }).then(() => getAllTasks());
  };


   // DELETING INDIVIDUAL ITEM
  const deleteItemHandler = (item) => {
    deleteItem(item.id, item).then(() => {
      getAllTasks()
     })
   }

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
        <Box width="100%" marginTop= "10px">
          {todo.map((item, index) => {
            return (
              <Box
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  border: "1px solid gray",
                  width: "90%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
                key={index}
                onClick={() => {
                  isDone(item);
                }}
              >
                <Typography
                  style={{
                    textDecoration: item.done ? "line-through" : "none",
                    cursor: "pointer",
                    width: "100px"
                  }}
                >
                  {item.title}
                </Typography>
                <Button onClick={() => {
                  deleteItemHandler(item)
                }}
                variant = "contained" color = "error">Delete</Button>
              </Box>
            );
          })}
        </Box>
        <Typography variant="p" marginTop= "25px">You have {todo.length } pending tasks.</Typography>
      </Box>
    </Box>
  );
}

export default App;
