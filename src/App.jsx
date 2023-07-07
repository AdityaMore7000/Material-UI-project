import Notes from "./pages/Notes"
import Create from "./pages/Create"
import {Routes, Route} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function App() {
  return (
    <>
    <Routes>
      <Route index element={<Notes />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    </>
  )
}

export default App
