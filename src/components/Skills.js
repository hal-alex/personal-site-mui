import { Box, Typography, Divider } from "@mui/material"
import python from "../assets/python.png"
import javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import react_logo from "../assets/logo512.png"
import material_ui from "../assets/material-ui-1.svg"
import django from "../assets/django.png"
import drf from "../assets/drf.png"
import pg from "../assets/pg.svg"
import git from "../assets/git-icon.svg"
import github from "../assets/github.png"
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
      //   background: "#FD8A8A",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h2">Skills</Typography>
      <Box sx={styles.wrapper}>
        <Box sx={styles.languages}>
          <Divider>
            <Typography variant="h3">Languages</Typography>
          </Divider>
          <Box>
            <img src={python} alt="python" />
            <Typography variant="body1">Python</Typography>
          </Box>
          <Box>
            <img src={javascript} alt="javascript" />
            <Typography variant="body1">JavaScript (including ES6+)</Typography>
          </Box>
          <Box>
            <img src={html} alt="html5" />
            <Typography variant="body1">HTML5</Typography>
          </Box>
          <Box>
            <img src={css} alt="css" />
            <Typography variant="body1">CSS3</Typography>
          </Box>
          <Divider>
            <Typography variant="h3">Frameworks & Libraries</Typography>
          </Divider>
          <Box>
            <img src={react_logo} alt="javascript" />
            <Typography variant="body1">React</Typography>
          </Box>
          <Box>
            <img src={material_ui} alt="javascript" />
            <Typography variant="body1">Material UI</Typography>
          </Box>
          <Box>
            <img src={django} alt="javascript" />
            <Typography variant="body1">Django</Typography>
          </Box>
          <Box>
            <img src={drf} alt="javascript" />
            <Typography variant="body1">Django Rest Framework</Typography>
          </Box>
          <Divider>
            <Typography variant="h3">Database</Typography>
          </Divider>
          <Box>
            <img src={pg} alt="javascript" />
            <Typography variant="body1">PostgreSQL</Typography>
          </Box>
          <Divider>
            <Typography variant="h3">Version Control</Typography>
          </Divider>
          <Box>
            <img src={git} alt="javascript" />
            <Typography variant="body1">Git</Typography>
          </Box>
          <Box>
            <img src={github} alt="javascript" />
            <Typography variant="body1">GitHub</Typography>
          </Box>
          <Divider>
            <Typography variant="h3">Deployment</Typography>
          </Divider>
          <Box>
            <img src={aws_eb} alt="javascript" />
            <Typography variant="body1">AWS Elastic Beanstalk</Typography>
          </Box>
          <Box>
            <img src={aws_ec2} alt="javascript" />
            <Typography variant="body1">AWS EC2</Typography>
          </Box>
          <Box>
            <img src={s3} alt="javascript" />
            <Typography variant="body1">AWS S3</Typography>
          </Box>
          <Box>
            <img src={load_balancer} alt="javascript" />
            <Typography variant="body1">AWS Load Balancer</Typography>
          </Box>
          <Box>
            <img src={amplify} alt="javascript" />
            <Typography variant="body1">AWS Amplify</Typography>
          </Box>
          <Divider>
            <Typography variant="h3">Other Tools & Tech I use</Typography>
          </Divider>
          <Box>
            <img src={vs_code} alt="javascript" />
            <Typography variant="body1">Visual Studio Code</Typography>
          </Box>
          <Box>
            <img src={docker} alt="javascript" />
            <Typography variant="body1">Docker</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Skills
