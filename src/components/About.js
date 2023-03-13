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
  }

  return (
    <Box sx={styles.container} id="about">
      <Box sx={styles.wrapper}>
        <Typography variant="h2">About</Typography>
        <Typography>
          I have been working for fintech startups since early 2015 and over the
          years, I was fortunate enough to be involved in an array of
          non-developer functions such as managing teams, marketing, investor
          relations, customer support and more.
        </Typography>
        <Typography>
          Whilst my previous titles were not explicitly technical, I had
          significant exposure to working with software engineers, as well as
          in-depth product testing and creating detailed specifications for new
          product features.
        </Typography>
        <Typography>
          In 2022, I decided to complete my skillset and finally become a
          developer. This process begun with self-teaching and eventually
          progressed into an intense, full-time bootcamp that gave me valuable
          foundational knowledge.
        </Typography>
        <Typography>
          Currently, I am improving my existing stack and learning new
          technologies through the process of building unique projects.
        </Typography>
      </Box>
    </Box>
  )
}

export default About
