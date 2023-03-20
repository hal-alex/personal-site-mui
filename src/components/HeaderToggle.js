import * as React from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"
import { Typography } from "@mui/material"
import { useGlobalContext } from "../globalContext"

const HeaderToggle = () => {
  const { handleChange } = useGlobalContext()

  return (
    <FormGroup>
      <Typography>Short Version</Typography>
      <FormControlLabel
        onChange={handleChange}
        control={<Switch defaultChecked />}
        label="Label"
      />
      <Typography>Long Version</Typography>
    </FormGroup>
  )
}

export default HeaderToggle
