import React from 'react';
import {Box, Typography, TextField, Button } from '@mui/material';

const Edit = () => {
  return (
      <Box height = "100vh" display= "flex" justifyContent= "center" alignItems = "center">
          <Box style = {{backgroundColor: "#f3f3f3", padding: "30px"}} display= "flex" justifyContent= "center" alignItems = "center" flexDirection= "column">
              <Typography variant = "h4">Edit your task</Typography>
              <Box display = "flex" marginTop = "20px" flexDirection = "column">
                  <TextField type="text" />
                  <Button variant = "contained" color = "success" style = {{marginTop: "10px"}}>Submit</Button>
              </Box>
          </Box>
   </Box>
  )
}

export default Edit
