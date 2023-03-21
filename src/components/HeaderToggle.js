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
    <FormGroup sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Typography style={styles.toggleText}>More Detail</Typography>
      <FormControlLabel
        onChange={handleChange}
        labelPosition="left"
        control={<Switch size="small" />}
      />
    </FormGroup>
  )
}

export default HeaderToggle
