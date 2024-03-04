import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import { lightTheme } from "./components/Themes";
import WorkPage from "./components/WorkPage";
import SoundBar from "./components/subComponents/SoundBar";
import GlobalStyle from "./globalStyles";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/skills" element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
