import React from "react";

// CHILD COMPONENTS
import Hero from "./Components/Hero/Hero";
// import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

// STYLED COMPONENTS
import {
  Container,
  Main
} from './DisplayStyles';

// DISPLAY COMPONENT
const Display = () => {
  return (
    <Container>
      <Hero />
      <Main>
        {/* <Introduction /> */}
        <Projects />
        <Contact />
      </Main>
    </Container>
  );
};
export default Display;
