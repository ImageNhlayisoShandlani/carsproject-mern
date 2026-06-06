
import { ThemeProvider } from '@mui/material/styles'
import './App.css'
import Navbar from './components/NavBar'
import Home from './screens/Home'
import theme from './theme'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
