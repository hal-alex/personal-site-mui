import { Box } from "@mui/material"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
import BottomNavBar from "./components/BottomNavBar"
import { useGlobalContext } from "./globalContext"

function App() {
  const { showLongVersion } = useGlobalContext()

  return (
    <>
      <Box>
        <Header></Header>
        <Hero></Hero>
        {showLongVersion && <About></About>}
        {showLongVersion && <Skills></Skills>}
        <Projects></Projects>
        <ContactMe></ContactMe>
      </Box>
      <BottomNavBar></BottomNavBar>
    </>
  )
}

export default App
