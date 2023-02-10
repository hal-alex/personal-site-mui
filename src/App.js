import { Box } from "@mui/material"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

function App() {
  return (
    <Box>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </Box>
  )
}

export default App
