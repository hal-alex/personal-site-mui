import { useState } from "react"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link, Box } from "@mui/material"

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        padding: "10px",
      }}
    >
      <Link id="basic-button" onClick={handleClick}>
        Projects
      </Link>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/#project-1">Project 1 - Factored MVP</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/#project-2">Project 2 - Printers 3D</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/#bootcamp-projects">Bootcamp 2022 Projects</Link>
        </MenuItem>
      </Menu>
    </Box>
  )
}
