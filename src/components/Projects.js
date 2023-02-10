import { Box, Card, Divider, Typography } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Projects = () => {
  const styles = {
    projects: {
      background: "#E9D8E1",
      display: "flex",
      minHeight: "100vh",
    },
  }

  return (
    <Box sx={styles.projects}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.project1}>
          <Typography variant="h3">Project 1 - Factored MVP</Typography>
          <Divider>Overview</Divider>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            libero aspernatur? Alias obcaecati suscipit quasi blanditiis
            voluptatem voluptates ipsam, similique quibusdam reiciendis
            dignissimos sint incidunt harum veniam totam consequatur id.
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Frontend</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Backend</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Deployment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Card></Card>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
