import "./App.css";
import { Box, Typography, TextField } from "@mui/material";

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
        <TextField type="text" />
      </Box>
    </Box>
  );
}

export default App;
