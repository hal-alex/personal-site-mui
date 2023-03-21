import { Box, Button, Divider, Typography, Grid, Link } from "@mui/material"

import Tooltip from "@mui/material/Tooltip"

import GitHubIcon from "@mui/icons-material/GitHub"
import PreviewIcon from "@mui/icons-material/Preview"
import { useGlobalContext } from "../globalContext"
import ProjectOneDeets from "./ProjectOneDeets"
import ProjectTwoDeets from "./ProjectTwoDeets"

const Projects = () => {
  const { showLongVersion } = useGlobalContext()

  const styles = {
    projects: {
      background: "#FFE5AE",
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
    projectLinks: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      p: "10px",
    },
    customCard: {
      display: "flex",
      padding: "10px",
    },
    cardTick: {
      pr: "5px",
    },
    codeSpan: {
      display: "inline",
      p: "0px 2px",
      fontFamily: "Source Code Pro",
      color: "red",
      background: "#d3d3d3",
      borderRadius: "5px",
      weight: 400,
      wordBreak: "break-all",
    },
    psCard: {
      padding: "20px",
      textAlign: "left",
    },
    videoContainer: (theme) => ({
      width: "900px",
      height: "500px",
      [theme.breakpoints.down("md")]: {
        width: "400px",
        height: "222px",
      },
    }),
  }

  return (
    <Box sx={styles.projects} id="projects">
      <Box sx={styles.wrapper}>
        <Typography variant="h3" id="project-1">
          Project 1 - Factored MVP
        </Typography>
        <Divider>
          <Typography variant="h3">Overview</Typography>
        </Divider>
        <Typography variant="body1">
          I built a full stack MVP for a client that allows landlords to take
          out loans and use their future property rent as collateral.
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Link
              href="https://github.com/hal-alex/factored-mvp"
              sx={styles.projectLinks}
              target="_blank"
            >
              <GitHubIcon></GitHubIcon>
              <Typography>View Frontend Repo</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              href="https://github.com/hal-alex/factored-mvp-backend"
              sx={styles.projectLinks}
              target="_blank"
            >
              <GitHubIcon></GitHubIcon>
              <Typography>View Backend Repo</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              href="https://www.app.factored.co/"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Deployed App</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              href="https://www.app.factored.co/about-factored-app/"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>Verify I Built This App</Typography>
            </Link>
          </Grid>
        </Grid>
        <Divider>
          <Typography variant="h5">Product Demo</Typography>
        </Divider>
        <Box sx={styles.videoContainer}>
          <iframe
            src="https://drive.google.com/file/d/1SXv0SL86Eu9VjPsIOb7l-GT0l7LUwpAm/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </Box>
        {showLongVersion && <ProjectOneDeets></ProjectOneDeets>}

        <Typography variant="h3" id="project-2">
          Project 2 - Printers 3D
        </Typography>
        <Divider>
          <Typography variant="h3">Overview</Typography>
        </Divider>
        <Typography variant="body1">
          I built this full stack application that filters over 100 3D printers
          across 16 different parameters set by the user.
          <br></br>
          <br></br>
          GitHub repos for frontend and backend apps are private for commercial
          reasons.
        </Typography>
        <Divider>
          <Typography variant="h5">Product Demo</Typography>
        </Divider>
        <Box sx={styles.videoContainer}>
          <iframe
            src="https://drive.google.com/file/d/11llbdiAeVA6RyHipClt87QP0yOZ4mehp/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Link
              href="https://www.printers-3d.xyz/"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Deployed App</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              href="https://www.printers-3d.xyz/about-us"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>Verify I Built This App</Typography>
            </Link>
          </Grid>
        </Grid>
        {showLongVersion && <ProjectTwoDeets></ProjectTwoDeets>}

        <Typography variant="h3" id="bootcamp-projects">
          Bootcamp 2022 Projects
        </Typography>
        <Divider>
          <Typography variant="h3">Trivia Quiz</Typography>
        </Divider>
        <Typography variant="body1">
          This was a duo project (I worked with another classmate) to develop a
          React frontend app that would consume a public API, serve questions +
          possible options, keep track of the score and at the end display the
          correct answers.
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Link
              href="https://github.com/hal-alex/ga-project-2-trivia"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Frontend Repo</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              href="https://sei-project2-quiz.netlify.app/"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Deployed App</Typography>
            </Link>
          </Grid>
        </Grid>
        <Divider>
          <Typography variant="h5">Product Demo</Typography>
        </Divider>
        <Box sx={styles.videoContainer}>
          <iframe
            src="https://drive.google.com/file/d/1Hl9QJMzTKQenJ0FZSm3GjRrN04KiCj7w/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </Box>
        <Divider>
          <Typography variant="h3">Mario Game</Typography>
        </Divider>
        <Typography variant="body1">
          This was a solo project that I build using only HTML, CSS and vanilla
          JavaScript. The brief was to develop a simple game that had character
          movement, a mechanism that would keep track of score and amount of
          lives.
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Link
              href="https://github.com/hal-alex/ga-project-1-mario"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Frontend Repo</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link
              href="https://hal-alex.github.io/ga-project-1-mario/"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Deployed App</Typography>
            </Link>
          </Grid>
        </Grid>
        <Divider>
          <Typography variant="h5">Product Demo (video has sound)</Typography>
        </Divider>
        <Box sx={styles.videoContainer}>
          <iframe
            src="https://drive.google.com/file/d/1skg1hzUvyXgqHfS4nUryoxzGDRhf5jg3/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
