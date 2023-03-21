import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import { Typography } from "@mui/material"
import { useGlobalContext } from "../globalContext"

const HeaderToggle = () => {
  const { handleChange } = useGlobalContext()

  const styles = {
    toggleText: {
      color: "#777FEB",
      fontSize: "15px",
    },
  }

  return (
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Typography style={styles.toggleText}>Detailed View</Typography>
      <FormControlLabel
        onChange={handleChange}
        control={<Switch size="small" />}
      />
    </FormGroup>
  )
}

export default HeaderToggle
