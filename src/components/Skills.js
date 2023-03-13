import { Box, Typography, Divider } from "@mui/material"
import python from "../assets/icons-python.svg"
import javascript from "../assets/icons-javascript.svg"
import html from "../assets/icons-html-5.svg"
import css from "../assets/css3.svg"
import react_logo from "../assets/icons-react.svg"
import material_ui from "../assets/icons-material-ui.svg"
import django from "../assets/django.png"
import drf from "../assets/drf.png"
import pg from "../assets/pg.svg"
import git from "../assets/icons-git.svg"
import github from "../assets/icons-github.svg"
import vs_code from "../assets/vscode.svg"
import docker from "../assets/docker.webp"
import aws_eb from "../assets/aws-eb.svg"
import aws_ec2 from "../assets/aws-ec2.webp"
import s3 from "../assets/s3.jpg"
import load_balancer from "../assets/load-balancer.svg"
import amplify from "../assets/amplify.jpg"

const Skills = () => {
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
    wrapper: {
      display: "flex",
      width: "75%",
      height: "75",
      gap: "35px",
      flexDirection: "column",
      textAlign: "center",
    },
    skillsContainer: {
      width: "100%",
      display: "flex",
      mt: "10px",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
    logoContainer: {
      width: "100px",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    skillsLogo: {
      width: "100%",
    },
  }

  return (
    <Box sx={styles.container} id="skills">
      <Box sx={styles.wrapper}>
        <Typography variant="h2">Skills</Typography>
        <Divider>
          <Typography variant="h3">Languages</Typography>
        </Divider>
        <Box sx={styles.skillsContainer}>
          <Box sx={styles.logoContainer}>
            <img src={python} alt="python" style={styles.skillsLogo} />
            <Typography variant="body1" style={{ textAlign: "center" }}>
              Python
            </Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={javascript} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">JavaScript (including ES6+)</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={html} alt="html5" style={styles.skillsLogo} />
            <Typography variant="body1">HTML5</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={css} alt="css" style={styles.skillsLogo} />
            <Typography variant="body1">CSS3</Typography>
          </Box>
        </Box>
        <Divider>
          <Typography variant="h3">Frameworks & Libraries</Typography>
        </Divider>
        <Box sx={styles.skillsContainer}>
          <Box sx={styles.logoContainer}>
            <img src={react_logo} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">React</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={material_ui} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">Material UI</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={django} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">Django</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={drf} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">Django REST Framework</Typography>
          </Box>
        </Box>
        <Divider>
          <Typography variant="h3">Database</Typography>
        </Divider>
        <Box sx={styles.skillsContainer}>
          <Box sx={styles.logoContainer}>
            <img src={pg} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">PostgreSQL</Typography>
          </Box>
        </Box>

        <Divider>
          <Typography variant="h3">Version Control</Typography>
        </Divider>
        <Box sx={styles.skillsContainer}>
          <Box sx={styles.logoContainer}>
            <img src={git} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">Git</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={github} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">GitHub</Typography>
          </Box>
        </Box>

        <Divider>
          <Typography variant="h3">Deployment</Typography>
        </Divider>

        <Box sx={styles.skillsContainer}>
          <Box sx={styles.logoContainer}>
            <img src={aws_eb} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">AWS Elastic Beanstalk</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={aws_ec2} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">AWS EC2</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={s3} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">AWS S3</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img
              src={load_balancer}
              alt="javascript"
              style={styles.skillsLogo}
            />
            <Typography variant="body1">AWS Load Balancer</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={amplify} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">AWS Amplify</Typography>
          </Box>
        </Box>

        <Divider>
          <Typography variant="h3">Other Tools & Tech</Typography>
        </Divider>
        <Box sx={styles.skillsContainer}>
          <Box sx={styles.logoContainer}>
            <img src={vs_code} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">VS Code</Typography>
          </Box>
          <Box sx={styles.logoContainer}>
            <img src={docker} alt="javascript" style={styles.skillsLogo} />
            <Typography variant="body1">Docker</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
