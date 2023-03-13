import { Typography, Box, Button, Link } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const ContactMe = () => {
  const styles = {
    container: {
      background: "#F5F5F5",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
      pt: "60px",
      pb: "60px",
    },
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
    contactIcon: {
      fontSize: "500%",
    },
    contactFormContainer: (theme) => ({
      width: "600px",
      height: "710px",
      [theme.breakpoints.down("md")]: {
        width: "350px",
      },
    }),
  }

  return (
    <Box sx={styles.container} id="contact">
      <Box sx={styles.wrapper}>
        <Typography variant="h2">Contact</Typography>
        <Box sx={{ display: "flex", gap: "3rem" }}>
          <Link href="https://github.com/hal-alex" target="_blank">
            <GitHubIcon sx={styles.contactIcon}></GitHubIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alex-h-b88058b1/"
            target="_blank"
          >
            <LinkedInIcon sx={styles.contactIcon}></LinkedInIcon>
          </Link>
        </Box>
        <Box sx={styles.contactFormContainer}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyDtGUXEnQI7hstXuhEzVF8T2sU1AuzR_Et9TyeYedG6x2VA/viewform?embedded=true"
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Box>
      </Box>
    </Box>
  )
}

export default ContactMe
