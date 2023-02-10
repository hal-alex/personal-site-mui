import { useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link, Box } from "@mui/material"

export default function BasicMenu() {
  const styles = {
    dropdownMenu: {
      textTransform: "capitalize",
      pt: "9px",
    },
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={styles.dropdownMenu}
      >
        Projects
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Project 1 - Factored MVP</MenuItem>
        <MenuItem onClick={handleClose}>Project 2 - Personal Site</MenuItem>
      </Menu>
    </Box>
  )
}
