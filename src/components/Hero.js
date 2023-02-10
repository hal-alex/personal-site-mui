import { Typography, Box, Button } from "@mui/material"

const Hero = () => {
  const styles = {
    hero: (theme) => ({
      //   padding: "100px",
      [theme.breakpoints.up("md")]: {
        background: "#E9D8E1",
        display: "flex",
        minHeight: "92vh",
        justifyContent: "center",
        alignItems: "center",
        // padding: "50px",
      },
    }),
    // wrapper: (theme) => ({
    //   padding: "20px",
    //   [theme.breakpoints.up("md")]: {
    //     // maxWidth: "1240px",
    //     minHeight: "100vh",
    //     display: "flex",
    //     alignItems: "center",
    //     gap: "35px",
    //     padding: "44px",
    //   },
    // }),
    // text: (theme) => ({
    //   margin: "25px 0px",
    //   [theme.breakpoints.up("md")]: {
    //     marginBottom: "44px",
    //   },
    // }),
    buttonContainer: {
      width: "100%",
    },
    ctaButton: {
      m: "20px",
    },
  }

  return (
    <Box sx={styles.hero}>
      <Box sx={styles.wrapper}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2">
            Hej and welcome to my personal site
          </Typography>
          <Typography variant="body1" sx={styles.text}>
            I am a full-stack developer with over 8 years of fintech and
            blockchain experience, and an active GitHub account.
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button variant="contained" sx={styles.ctaButton}>
              View Skills
            </Button>
            <Button variant="contained" sx={styles.ctaButton}>
              View Projects
            </Button>
            <Button variant="contained" sx={styles.ctaButton}>
              Contact Me
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
