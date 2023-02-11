import { Typography, Box, Button, Link } from "@mui/material"

const About = () => {
  const styles = {
    container: {
      background: "#A8D1D1",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      display: "flex",
      maxWidth: "75%",
      height: "75%",
      flexDirection: "column",
    },
  }

  return (
    <Box sx={styles.container} id="about">
      <Typography variant="h2">About</Typography>
      <Box sx={styles.wrapper}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
          sint porro harum, quia sit ea reiciendis voluptatibus soluta
          laboriosam repellendus, modi optio nulla ducimus in, maiores aliquam
          minima. Placeat.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
          sint porro harum, quia sit ea reiciendis voluptatibus soluta
          laboriosam repellendus, modi optio nulla ducimus in, maiores aliquam
          minima. Placeat.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
          sint porro harum, quia sit ea reiciendis voluptatibus soluta
          laboriosam repellendus, modi optio nulla ducimus in, maiores aliquam
          minima. Placeat.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eaque
          sint porro harum, quia sit ea reiciendis voluptatibus soluta
          laboriosam repellendus, modi optio nulla ducimus in, maiores aliquam
          minima. Placeat.
        </Typography>
      </Box>
    </Box>
  )
}

export default About
