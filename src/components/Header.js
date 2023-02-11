import React from "react"

import HomeIcon from "@mui/icons-material/Home"

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Link,
  Button,
} from "@mui/material"

import DropdownMenu from "./DropdownMenu"

const styles = {
  appBar: {
    background: "white",
    display: "flex",
  },
  logo: {
    color: "blue",
    width: "75px",
    height: "75px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  links: {
    padding: "10px",
  },
  linkContainer: {
    display: "flex",
  },
}

const Header = () => {
  const pages = [
    { title: "About", inpageURL: "/#about" },
    { title: "Skills", inpageURL: "/#skills" },
    { title: "Projects" },
    { title: "Contact", inpageURL: "/#contact" },
  ]

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar sx={styles.container}>
          <Box component="a" href="/">
            <HomeIcon sx={styles.logo}></HomeIcon>
          </Box>
          <Box sx={styles.linkContainer}>
            {pages.map((item, index) => {
              return item.title === "Projects" ? (
                <DropdownMenu key={index}></DropdownMenu>
              ) : (
                <Link href={item.inpageURL} key={index} sx={styles.links}>
                  {item.title}
                </Link>
              )
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
