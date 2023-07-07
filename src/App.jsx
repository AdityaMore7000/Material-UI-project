import Notes from "./pages/Notes"
import Create from "./pages/Create"
import {Routes, Route} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { purple } from "@mui/material/colors";
function App() {
  const theme = createTheme({
    palette:{
      primary:{
        main:'#9c27b0'
      },
      secondary: purple
    },
    typography:{
      fontFamily:" 'Quicksand', sans-serif"
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
    <Routes>
      <Route index element={<Notes />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    </ThemeProvider>
    </>
  )
}

export default App
