import React from "react"

import HomeIcon from "@mui/icons-material/Home"

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material"

const styles = {
  appBar: {
    background: "gray",
  },
  logo: {
    color: "blue",
    width: "100px",
    height: "100px",
  },
}

const Header = () => {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl" sx={styles.container}>
        <Toolbar>
          <Box component="a" href="/">
            <HomeIcon sx={styles.logo}></HomeIcon>
          </Box>
          <Typography>Hello</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
