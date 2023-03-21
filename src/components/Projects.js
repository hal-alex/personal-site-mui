import {
  Box,
  Card,
  Divider,
  Typography,
  List,
  ListItem,
  Grid,
  Link,
} from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import DoneIcon from "@mui/icons-material/Done"

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
              href="https://github.com/hal-alex/factored-mvp-backend"
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
      </Box>
    </Box>
  )
}

export default Projects
