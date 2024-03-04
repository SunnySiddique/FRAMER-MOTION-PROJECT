import { motion } from "framer-motion";
import styled, { ThemeProvider, keyframes } from "styled-components";
import astronaute from "../assets//Image/spaceman.png";
import ParticlesComponent from "../components/subComponents/ParticlesComponent";
import { darkTheme } from "./Themes";
import BigTitle from "./subComponents/BigTitle";
import LogoComponent from "./subComponents/LogoComponent";
import PowerButton from "./subComponents/PowerButton";
import SocialIcons from "./subComponents/SocialIcons";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;

const float = keyframes`

0%{
  transform: translateY(-10px);
}
50%{
  transform: translateY(15px) translateX(15px);
}
100%{
  transform: translateY(-10px);
}
`;

const Spaceman = styled.div`
  animation: ${float} 4s ease infinite;
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);

  top: 10rem;
  font-family: "Ubutntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticlesComponent theme="dark" />

        <Spaceman>
           <motion.img src={astronaute} 
           initial={{x: "100%", y: "200%"}}
           animate={{x: 0, y: 0}}
           transition={{
            duration: 2,
            delay: 1
           }}
           />
        </Spaceman>
        <Main 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, delay: 1}}
        >
          {` I'm`} a front-end developer located in India. I love to create
          simple yet beautiful websites with great user experience.
          <br /> <br />
          {`I'm `}interested in the whole frontend stack Like trying new things
          and building great projects.{` I'm`} an independent freelancer and
          blogger. I love to write blogs and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
