import BottomNavigation from "@mui/material/BottomNavigation"
import HeaderToggle from "./HeaderToggle"

export default function LabelBottomNavigation() {
  return (
    <BottomNavigation
      sx={{
        width: 300,
        position: "fixed",
        bottom: "0",
        right: "0",
        background: "#F5F5F5",
      }}
    >
      <HeaderToggle></HeaderToggle>
    </BottomNavigation>
  )
}
