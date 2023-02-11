import { Typography, Box, Button, Link } from "@mui/material"

const Hero = () => {
  let s = new Date().toString().split(" ")[4].split(":")[0]

  console.log(s)
  const styles = {
    hero: (theme) => ({
      background: "#F5F5F5",
      display: "flex",
      minHeight: "92vh",
      justifyContent: "center",
      alignItems: "center",
      padding: "50px",
      //   padding: "100px",
      [theme.breakpoints.up("md")]: {},
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
            blockchain experience, and an active{" "}
            <Link href="https://github.com/hal-alex" target="_blank">
              GitHub account
            </Link>
            .
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Link href="/#skills">
              <Button variant="contained" sx={styles.ctaButton}>
                View Skills
              </Button>
            </Link>

            <Link href="/#projects">
              <Button variant="contained" sx={styles.ctaButton}>
                View Projects
              </Button>
            </Link>
            <Link href="/#skills">
              <Button variant="contained" sx={styles.ctaButton}>
                Contact Me
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
