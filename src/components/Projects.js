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

const Projects = () => {
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
          <Grid item md={6}>
            <Link
              href="https://github.com/hal-alex/factored-mvp"
              sx={styles.projectLinks}
              target="_blank"
            >
              <GitHubIcon></GitHubIcon>
              <Typography>View Frontend Repo</Typography>
            </Link>
          </Grid>
          <Grid item md={6}>
            <Link
              href="https://github.com/hal-alex/factored-mvp-backend"
              sx={styles.projectLinks}
              target="_blank"
            >
              <GitHubIcon></GitHubIcon>
              <Typography>View Backend Repo</Typography>
            </Link>
          </Grid>
          <Grid item md={6}>
            <Link
              href="https://github.com/hal-alex/factored-mvp-backend"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Deployed App</Typography>
            </Link>
          </Grid>
          <Grid item md={6}>
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
          <Typography variant="h3">Key Features</Typography>
        </Divider>
        <List>
          <ListItem>
            <Card sx={styles.customCard}>
              <DoneIcon sx={styles.cardTick}></DoneIcon>
              User authentication to allow registration, log in and password
              reset over email{" "}
            </Card>
          </ListItem>
          <ListItem>
            <Card sx={styles.customCard}>
              <DoneIcon sx={styles.cardTick}></DoneIcon>
              Stateful authentication with token authentication
            </Card>
          </ListItem>
          <ListItem>
            {" "}
            <Card sx={styles.customCard}>
              <DoneIcon sx={styles.cardTick}></DoneIcon>
              Ability to create an advance (loan) and submit supporting
              documents
            </Card>
          </ListItem>
          <ListItem>
            {" "}
            <Card sx={styles.customCard}>
              <DoneIcon sx={styles.cardTick}></DoneIcon>
              Schedule of payments and their statuses are generated once the
              state of each loan changes
            </Card>
          </ListItem>
          <ListItem>
            {" "}
            <Card sx={styles.customCard}>
              <DoneIcon sx={styles.cardTick}></DoneIcon>
              Custom admin panel that allows administrators to change loan and
              payment details, plus 2FA for admin users
            </Card>
          </ListItem>
          <ListItem>
            {" "}
            <Card sx={styles.customCard}>
              <DoneIcon sx={styles.cardTick}></DoneIcon>
              Third party API integration with Persona for KYC (Know Your
              Customer) checks and Sendgrid (for emails)
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
                Initially, I worked on creating a frontend site that used only
                using local storage as the client wanted a barebones app that
                they could demonstrate to potential investors. Later, as the
                backend was being built out, I started connecting the frontend
                to the REST API to enable end to end functionality and move away
                from storing app data in local storage.
                <br></br>
                <br></br>
                React – I used React for the frontend functionality and axios
                library for interacting with the backend. When a user logs in,
                an auth token is saved to local storage and is used with each
                request to the backend to authenticate it. I also used react
                router dom to fetch the URL details to identify each advance
                (loan).
                <br></br>
                <br></br>
                CSS3 - I decided to use vanilla CSS for this MVP because I
                wanted to revise some of the styling and positioning skills that
                I learned in 2022. This also gave me the perfect opportunity to
                practise more advanced layout features like flexbox and grid.
                The client specified that mobile friendly frontend was not a
                priority for this MVP, however I still tried my best to design
                pages that would look good on all screen sizes.
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
                Django REST Framework (DRF) – the backend is based on Django and
                DRF, and for the database, I used PostgreSQL. I configured 2
                third party APIs into the backend – Sendgrid to send emails to
                existing users that would like to reset their passwords, and
                created a webhook for Persona (along with IP whitelisting) that
                would accept a POST request whenever a user would successfully
                verify their identity on the frontend, which in turn would
                change the{" "}
                <Typography sx={styles.codeSpan}>is_verified</Typography> flag
                in the backend.
                <br></br>
                <br></br>I also utilised UUID and short UUID for identifying
                users and loans, as that is more secure than using sequential
                IDs that are default in Django.
                <br></br>
                <br></br>
                To create superuser admin accounts, I would{" "}
                <Typography sx={styles.codeSpan}>ssh</Typography> into the EC2
                instance and use the CLI to configure the administrator
                commands.
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
                The frontend app is deployed on AWS Amplify that syncs with a
                GitHub repo and adds environment variables. I added a YAML file
                in the root directory that would{" "}
                <Typography sx={styles.codeSpan}>cd</Typography> into the client
                folder as I initially thought both the backend and the frontend
                would be in the same repo.
                <br></br>
                <br></br>
                The backend app and database are set up with AWS Elastic
                Beanstalk (EB), along with S3 for file storage. The EB
                environment has a load balancer with a couple of listeners that
                handle HTTP and HTTPS requests (the HTTPS listener was
                configured to use SSL certificates held by the main domain of
                the project).
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
              At the beginning, I used{" "}
              <Typography sx={styles.codeSpan}>useContext</Typography> hook and
              create a global context that could share data across any pages or
              components. However, I came across cases where there would be a
              race condition between the functions executing inside the global
              context and the async functions in the page/component, which lead
              to some unnecessary re-renders and API calls.
            </Card>
          </Grid>
          <Grid item md={12}>
            <Card style={styles.psCard}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                Solution
              </Typography>
              I moved away from using global context and added similar code to
              each page/component to ensure no race conditions would be present.
              This is not the most elegant solution and in the future, I plan to
              refactor the code, and perhaps use React Router Dom or Redux to
              reduce the amount of states and functions.
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
              For Persona webhook, I had to implement IP whitelisting to allow
              requests only from Persona’s range of IP addresses, otherwise the
              user would be able to change their own KYC status by sending the
              request directly to the backend. The problem is that each client
              request is handled by a load balancer and thus, Django sees the IP
              address of the load balancer, and not the IP address of the
              client.
            </Card>
          </Grid>

          <Grid item md={12}>
            <Card style={styles.psCard}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                Solution
              </Typography>
              I utilised{" "}
              <Typography sx={styles.codeSpan}>HTTP_X_FORWARDED_FOR</Typography>{" "}
              of the request to fetch the origination IP address of the client
              and check if that address belongs to a list of whitelisted IP
              addresses. This way only authorised requests would be successfully
              processed by the backend.
            </Card>
          </Grid>
        </Grid>
        <Typography variant="h3" id="project-2">
          Project 2 - Printers 3D
        </Typography>
        <Divider>
          <Typography variant="h3">Overview</Typography>
        </Divider>
        <Typography variant="body1">
          I built this full stack application that filters over 100 3D printers
          across 16 different parameters set by the user.
        </Typography>
        <Grid container>
          <Grid item md={6}>
            <Link
              href="https://www.printers-3d.xyz/"
              sx={styles.projectLinks}
              target="_blank"
            >
              <PreviewIcon></PreviewIcon>
              <Typography>View Deployed App</Typography>
            </Link>
          </Grid>
          <Grid item md={6}>
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
              Close to 400 images stored in S3 and 2000 data points in total
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
                React – I used React to build the frontend functionality for
                this app. During the design stage, I decided to go with backend
                filtering and thus, I utilised axios library that would send the
                printer parameters to the API server every time a change is
                detected in the frontend filtering. Further, I reused a lot of
                the components instead of hardcoding values and parameters,
                meaning that introducing new printer categories would be easier
                in the future.
                <br></br>
                <br></br>
                Material UI (MUI) - after creating my personal site using MUI, I
                wanted to get some hands-on experience with using this frontend
                library on a larger project. In the process, I saw the benefits
                (as well as some limitations) of using ready built components
                provided by Material UI. The current frontend styling is minimal
                and in the future I am planning to reskin it after taking a
                UI/UX course and perhaps also learn the basics of Figma design.
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
                Django REST Framework (DRF) – similar to the Factored MVP, I
                used Django, Django REST Framework and PostgreSQL in the
                backend. I implemented a number of endpoints that first provide
                all of the category names (e.g. brand of the printer) and then
                the values for each category (e.g. Creality, Prusa, Sovol,
                etc.). After, these parameters are used by the frontend to fetch
                the top 3D printers.
                <br></br>
                <br></br>
                For advanced filtering, I used Django's{" "}
                <Typography sx={styles.codeSpan}>Q</Typography> objects that
                enabled me to write a complex query for returning the right
                results.
                <br></br>
                <br></br>
                This project is the first one where I worked with a large data
                set (as there are over 100 3D printers and each has almost 20
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
                would use Putty to{" "}
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
                of purchasing the domain, configuring the DNS, managing
                subdomains and SSL certificates (as opposed to Factored app
                where some of these tasks were being handled by the customer).
                <br></br>
                <br></br>
                The frontend app is deployed on AWS Amplify and it connects to a
                GitHub repo that updates the instance whenever there is a new
                push.
                <br></br>
                <br></br>
                The backend app is deployed on AWS Elastic Beanstalk with a
                couple of load balancers to handle HTTP and HTTPS requests.
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
              Making the frontend app responsive was a priority for this
              project. One of the problems I encountered in the process is the
              ability to display filter categories and values on mobile view as
              there simply wasn't enough space to show the filters and the query
              results.
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
              As "special features" has a many-to-many relationship with
              printers, it made filtering 3D printers by a special feature
              tricky.
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
              to the end of the filtering query. This would check if a
              particular 3D printer would contain such a special feature and
              return the correct values back.
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Projects
