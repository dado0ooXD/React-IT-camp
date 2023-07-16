import React, {useState, useEffect} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useParams} from "react-router-dom";
import { getItemById } from '../firebase';

const Edit = () => {
    const [updatedTask, setUpdatedTask] = useState("");
    const params = useParams();

    useEffect(() => {
        getItemById(params.id).then((data) => {
            console.log(data);
            setUpdatedTask(data.title)
        })
    }, [])

  return (
      <Box height = "100vh" display= "flex" justifyContent= "center" alignItems = "center">
          <Box style = {{backgroundColor: "#f3f3f3", padding: "30px"}} display= "flex" justifyContent= "center" alignItems = "center" flexDirection= "column">
              <Typography variant = "h4">Edit your task</Typography>
              <Box display = "flex" marginTop = "20px" flexDirection = "column">
                  <TextField value = {updatedTask} onChange={e => setUpdatedTask(e.target.value)} type="text" />
                  <Button variant = "contained" color = "success" style = {{marginTop: "10px"}}>Submit</Button>
              </Box>
          </Box>
   </Box>
  )
}

export default Edit
