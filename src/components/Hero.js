import { Typography, Box, Button, Link } from "@mui/material"
import { useState, useEffect } from "react"
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople"

const Hero = () => {
  const [timeOfDayGreeting, setTimeOfDayGreeting] = useState("Hello")

  let dayTime = parseInt(new Date().toString().split(" ")[4].split(":")[0])

  useEffect(() => {
    // console.log(dayTime)
    if (dayTime >= 0 && dayTime < 12) {
      setTimeOfDayGreeting("Good Morning")
    } else if (dayTime >= 12 && dayTime < 17) {
      setTimeOfDayGreeting("Good Afternoon")
    } else if (dayTime >= 17 && dayTime < 24) {
      setTimeOfDayGreeting("Good Evening")
    }
  }, [])

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
    wrapper: (theme) => ({
      display: "flex",
      maxWidth: "75%",
      height: "75%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "35px",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        maxWidth: "95%",
      },
    }),
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
        <Typography variant="h2">
          {timeOfDayGreeting}{" "}
          <EmojiPeopleIcon sx={{ fontSize: "75%" }}></EmojiPeopleIcon>
        </Typography>
        <Typography variant="body1" sx={styles.text}>
          I am a full stack developer with over 8 years of fintech and
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
  )
}

export default Hero
