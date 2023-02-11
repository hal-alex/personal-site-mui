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
      background: "#E9D8E1",
      display: "flex",
      minHeight: "100vh",
    },
    projectLinks: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }

  return (
    <Box sx={styles.projects}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.project1}>
          <Typography variant="h3">Project 1 - Factored MVP</Typography>
          <Divider>
            <Typography variant="body1">Overview</Typography>
          </Divider>
          <Typography variant="body1">
            I built an MVP from 0 for a client that allows landlords to take out
            loans and use their future property rent as collateral.
          </Typography>
          <Grid container>
            <Grid item md={6}>
              <Link
                href="https://github.com/hal-alex/factored-mvp"
                sx={styles.projectLinks}
              >
                <GitHubIcon></GitHubIcon>
                <Typography>View Frontend Repo</Typography>
              </Link>
            </Grid>
            <Grid item md={6}>
              <Link
                href="https://github.com/hal-alex/factored-mvp-backend"
                sx={styles.projectLinks}
              >
                <GitHubIcon></GitHubIcon>
                <Typography>View Backend Repo</Typography>
              </Link>
            </Grid>
            <Grid item md={6}>
              <Link
                href="https://github.com/hal-alex/factored-mvp-backend"
                sx={styles.projectLinks}
              >
                <PreviewIcon></PreviewIcon>
                <Typography>View Deployed App</Typography>
              </Link>
            </Grid>
            <Grid item md={6}>
              <Link
                href="https://www.app.factored.co/about-factored-app/"
                sx={styles.projectLinks}
              >
                <PreviewIcon></PreviewIcon>
                <Typography>Verify I Built This App</Typography>
              </Link>
            </Grid>
          </Grid>
          <Divider>
            <Typography variant="body1">Key Features</Typography>
          </Divider>
          <List>
            <ListItem>
              <Card>
                <DoneIcon></DoneIcon>
                User authentication to allow registration, log in and password
                reset over email{" "}
              </Card>
            </ListItem>
            <ListItem>
              <Card>
                <DoneIcon></DoneIcon>
                Stateful authentication with token authentication
              </Card>
            </ListItem>
            <ListItem>
              {" "}
              <Card>
                <DoneIcon></DoneIcon>
                Ability to create an Advance (loan) and submit supporting
                documents
              </Card>
            </ListItem>
            <ListItem>
              {" "}
              <Card>
                <DoneIcon></DoneIcon>
                Schedule of payments and their statuses are generated once the
                state of each loan changes
              </Card>
            </ListItem>
            <ListItem>
              {" "}
              <Card>
                <DoneIcon></DoneIcon>
                Custom admin panel that allows administrators to change loan and
                payment details, plus 2FA for admin users
              </Card>
            </ListItem>
            <ListItem>
              {" "}
              <Card>
                <DoneIcon></DoneIcon>
                Third party API integration with Persona for KYC (Know Your
                Customer) checks and Sendgrid (for emails)
              </Card>
            </ListItem>
          </List>
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
                Initially, I worked on creating a frontend site that used only
                using local storage as the client wanted a barebones app that
                they could demonstrate to potential investors. Later, as the
                backend was being built out, I started connecting the frontend
                to the Rest API to enable end to end functionality and move away
                from storing app data in local storage.
                <br></br>
                <br></br>
                React – I used React for the frontend functionality and axios
                library for interacting with the backend API server. When a user
                logs in, an auth token is saved to local storage and is used
                with each request to the backend to authenticate it. I also used
                react router dom to fetch the URL details to identify each
                advance (loan).
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
              <Typography>
                Django Rest Framework (DRF) – the backend is based on Django and
                DRF, and for the database, I used PostgreSQL. I configured 2
                third party APIs into the backend – Sendgrid to send emails to
                existing users that would like to reset their passwords, and
                created a webhook for Persona (along with IP whitelisting) that
                would accept a POST request whenever a user would successfully
                verify their identity on the frontend, which in turn would
                change the “is_verified” flag in the backend.
                <br></br>
                <br></br>I also utilised UUID and short UUID for identifying
                users and loans, as that is more secure than using sequential
                IDs that are default in Django.
                <br></br>
                <br></br>
                To create superuser admin accounts, I would `ssh` into the EC2
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
              <Typography>
                The frontend app is deployed on AWS Amplify that syncs with a
                GitHub repo and adds environment variables. I added a YAML file
                in the root directory that would cd into the client folder as I
                initially thought both the backend and the frontend would be in
                the same repo.
                <br></br>
                <br></br>
                The backed app and databased are set up with AWS Elastic
                Beanstalk (EB), along with S3 for file storage. The EB
                environment has a load balancer with a couple of listeners that
                handle HTTP and HTTPS requests (the HTTPS listener was
                configured to use SSL certificates held by the main domain of
                the project).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Divider>
            <Typography variant="body1">Challenges & Solutions</Typography>
          </Divider>
          <Grid container>
            <Grid item md={6}>
              <Divider>
                <Typography variant="body1">Frontend</Typography>
              </Divider>
            </Grid>
            <Grid item md={6}>
              <Divider>
                <Typography variant="body1">Backend</Typography>
              </Divider>
            </Grid>

            <Grid item md={6}>
              <Card>
                <Typography variant="h3">Challenge</Typography>
                At the beginning, I used `useContext` hook and create a global
                context that could share data across any pages or components.
                However, I came across cases where there would be a race
                condition between the functions executing inside the global
                context and the async functions in the page/component, which
                lead to some unnecessary re-renders and API calls.
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card>
                <Typography variant="h3">Challenge</Typography>
                For Persona webhook, I had to implement IP whitelisting to allow
                requests only from Persona’s range of IP addresses, otherwise
                the user would be able to change their own KYC status by sending
                the request directly to the backend. The problem is that each
                client request is handled by a load balancer and thus, Django
                sees the IP address of the load balancer, and not the IP address
                of the client.
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card>
                <Typography variant="h3">Solution</Typography>I moved away from
                using global context and added similar code to each
                page/component to ensure no race conditions would be present.
                This is not the most elegant solution and in the future, I plan
                to refactor the code, and perhaps use React Router Dom or Redux
                to reduce the amount of states and functions.
              </Card>
            </Grid>
            <Grid item md={6}>
              <Card>
                <Typography variant="h3">Solution</Typography>I utilised `
                'HTTP_X_FORWARDED_FOR'` of the request to fetch the origination
                IP address of the client and check if that address belongs to a
                list of whitelisted IP addresses. This way only authorised
                requests would be successfully processed by the backend.
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
