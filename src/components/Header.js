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

const styles = {
  appBar: {
    background: "gray",
  },
  logo: {
    color: "blue",
    width: "75px",
    height: "75px",
  },
}

const Header = () => {
  const pages = [
    { title: "About" },
    { title: "Skills" },
    { title: "Project" },
    { title: "Contact" },
  ]

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Toolbar>
          <Box component="a" href="/">
            <HomeIcon sx={styles.logo}></HomeIcon>
          </Box>
          {pages.map((item, index) => {
            return <Typography>{item.title}</Typography>
          })}
          <Typography>Hello</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
