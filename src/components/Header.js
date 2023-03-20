import React from "react"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

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

import HeaderToggle from "./HeaderToggle"

const styles = {
  appBar: {
    background: "#F5F5F5",
    display: "flex",
  },
  container: {
    display: "flex",
    // justifyContent: "space-between",
    justifyContent: "center",
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
    <AppBar position="sticky" elevation={0} sx={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar sx={styles.container}>
          <Box sx={styles.linkContainer}>
            {pages.map((item, index) => {
              return item.title === "Projects" ? (
                <DropdownMenu key={index} sx={styles.links}></DropdownMenu>
              ) : (
                <Link href={item.inpageURL} key={index} sx={styles.links}>
                  {item.title}
                </Link>
              )
            })}
          </Box>
          <HeaderToggle></HeaderToggle>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
