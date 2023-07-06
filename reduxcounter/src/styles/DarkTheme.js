import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors'


export const themeDark = createTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[100],
            dark: purple[900]
        },
        secondary: {
            main: green[500]
        },
        // grey: {
        //     main: "#aaa"
        // },
        text: {
            primary: "#000",
            secondary: "",
            disabled:"#ccc" 
        },
        background: "#ccc",
       
    }

    
})