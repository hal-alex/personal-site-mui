import * as React from "react"
import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

const TooltipInfo = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))

export default function CustomizedTooltips() {
  return (
    <TooltipInfo
      title={
        <Typography color="inherit">
          Detailed view contains more information about Alex's bio, skills, and
          additional project details
        </Typography>
      }
    >
      <Button>
        <HelpOutlineIcon></HelpOutlineIcon>
      </Button>
    </TooltipInfo>
  )
}
