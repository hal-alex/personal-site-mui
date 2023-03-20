import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import { Typography } from "@mui/material"

const HeaderToggle = () => {
  return (
    <FormGroup>
      <Typography>Short Version</Typography>
      <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      <Typography>Long Version</Typography>
    </FormGroup>
  )
}

export default HeaderToggle
