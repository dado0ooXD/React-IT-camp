import "./App.css";
import { Box, Typography, TextField, Button } from "@mui/material";

function App() {
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
          flexDirection: "column"
        }}
      >
        <Typography variant="h4">Todo List</Typography>
        <Box display= "flex" marginTop = "15px">
          <TextField type="text" />
          <Button variant=  "contained" style = {{marginLeft: "5px"}} color = "primary">+</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
