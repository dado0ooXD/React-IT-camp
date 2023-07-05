import { createTheme } from "@mui/material/styles";
import { green, purple } from '@mui/material/colors'


export const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[100],
            dark: purple[900]
        },
        secondary: {
            main: green[500]
        },
        grey: "#aaa",
        text: "#000",
        background: "#ccc"
    }
})