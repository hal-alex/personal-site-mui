import {
  Box,
  Card,
  Divider,
  Typography,
  List,
  ListItem,
  Grid,
} from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import DoneIcon from "@mui/icons-material/Done"

const ProjectTwoDeets = () => {
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
    <>
      <Divider>
        <Typography variant="h3">Key Features</Typography>
      </Divider>
      <List>
        <ListItem>
          <Card sx={styles.customCard}>
            <DoneIcon sx={styles.cardTick}></DoneIcon>
            Advanced backend filtering that returns new results based on
            frontend parameter changes
          </Card>
        </ListItem>
        <ListItem>
          <Card sx={styles.customCard}>
            <DoneIcon sx={styles.cardTick}></DoneIcon>
            Responsive frontend design that changes layout and component sizes
            based on the dimensions of the viewport
          </Card>
        </ListItem>
        <ListItem>
          {" "}
          <Card sx={styles.customCard}>
            <DoneIcon sx={styles.cardTick}></DoneIcon>
            One-to-many and many-to-many relationships in PostgreSQL
          </Card>
        </ListItem>
        <ListItem>
          {" "}
          <Card sx={styles.customCard}>
            <DoneIcon sx={styles.cardTick}></DoneIcon>
            Ability to compare select 3D printers (in Compare tab) that are
            stored in local storage
          </Card>
        </ListItem>
        <ListItem>
          {" "}
          <Card sx={styles.customCard}>
            <DoneIcon sx={styles.cardTick}></DoneIcon>
            Close to 400 images stored in S3 and 2000 data points in PostgreSQL total
          </Card>
        </ListItem>
      </List>
      <Box>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Frontend</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: "left" }}>
              React – I used React to build the frontend functionality for this
              app. During the design stage, I decided to go with backend
              filtering and thus, I utilised axios library that would send the
              printer parameters to the API server every time a change is
              detected in the frontend filtering. Further, I reused a lot of the
              components instead of hardcoding values and parameters, meaning
              that introducing new printer categories would be easier in the
              future.
              <br></br>
              <br></br>
              Material UI (MUI) - after creating my personal site using MUI, I
              wanted to get some hands-on experience with using this frontend
              library on a larger project. In the process, I saw the benefits
              (as well as some limitations) of using ready built components
              provided by Material UI. The current frontend styling is minimal
              and in the future I am planning to reskin it after taking a UI/UX
              course and perhaps also learn the basics of Figma design.
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
            <Typography sx={{ textAlign: "left" }}>
              Django REST Framework (DRF) – similar to the Factored MVP, I used
              Django, Django REST Framework and PostgreSQL in the backend. I
              implemented a number of endpoints that first provide all of the
              category names (e.g. brand of the printer) and then the values for
              each category (e.g. Creality, Prusa, Sovol, etc.). After, these
              parameters are used by the frontend to fetch the top 3D printers.
              <br></br>
              <br></br>
              For advanced filtering, I used Django's{" "}
              <Typography sx={styles.codeSpan}>Q</Typography> objects that
              enabled me to write a complex query for returning the right
              results.
              <br></br>
              <br></br>
              This project is the first one where I worked with a large data set
              (as there are over 100 3D printers and each has almost 20
              different parameters) inside PostgreSQL. It allowed me to revise
              my SQL writing knowledge and build many-to-many relationships.
              <br></br>
              <br></br>
              For SEO purposes, I introduced a slug field for each 3D printer
              instead of using an ID/UUID. The slug field would be used by the
              frontend to construct the URL and fetch that particular 3D
              printer.
              <br></br>
              <br></br>
              To interact with Django's shell once the project was deployed, I
              would
              <Typography sx={styles.codeSpan}>ssh</Typography> into the EC2
              instance to run jobs like migrating and seeding the database.
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
            <Typography sx={{ textAlign: "left" }}>
              This is the first project where I went through the whole process
              of purchasing the domain, configuring the DNS, managing subdomains
              and SSL certificates (as opposed to Factored app where some of
              these tasks were being handled by the customer).
              <br></br>
              <br></br>
              The frontend app is deployed on AWS Amplify and it connects to a
              GitHub repo that updates the instance whenever there is a new
              push.
              <br></br>
              <br></br>
              The backend app is deployed on AWS Elastic Beanstalk with a couple
              of load balancers to handle HTTP and HTTPS requests.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider>
        <Typography variant="h3">Challenges & Solutions</Typography>
      </Divider>
      <Grid container sx={{ gap: "20px" }}>
        <Grid item xs={12}>
          <Divider>
            <Typography variant="body1">Frontend</Typography>
          </Divider>
        </Grid>
        <Grid item md={12}>
          <Card style={styles.psCard}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Challenge
            </Typography>
            Making the frontend app responsive was a priority for this project.
            One of the problems I encountered in the process is the ability to
            display filter categories and values on mobile view as there simply
            wasn't enough space to show the filters and the query results.
          </Card>
        </Grid>
        <Grid item md={12}>
          <Card style={styles.psCard}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Solution
            </Typography>
            I used MUI's{" "}
            <Typography sx={styles.codeSpan}>
              [theme.breakpoints.down("lg")]
            </Typography>{" "}
            helper to hide the filter component inside a popup (which shows up
            when a "Open filters" button is clicked). On larger screens, this
            button and popup wouldn't be visible.
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Divider>
            <Typography variant="body1">Backend</Typography>
          </Divider>
        </Grid>

        <Grid item md={12}>
          <Card style={styles.psCard}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Challenge
            </Typography>
            As "special features" has a many-to-many relationship with printers,
            it made filtering 3D printers by a special feature tricky.
          </Card>
        </Grid>

        <Grid item md={12}>
          <Card style={styles.psCard}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
              Solution
            </Typography>
            To solve this problem, I did some research and added{" "}
            <Typography sx={styles.codeSpan}>
              Q(special_features__name__in=request.data["special_features"])
            </Typography>{" "}
            to the end of the filtering query. This would check if a particular
            3D printer would contain such a special feature and return the
            correct values back.
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectTwoDeets
