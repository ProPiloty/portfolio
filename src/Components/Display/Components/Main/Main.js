import React from "react";

// CHILD COMPONENTS
// import Introduction from "./Components/Introduction/Introduction";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

// STYLED COMPONENTS
import { Container } from "./MainStyles";

// MAIN COMPONENT
const Main = () => {
  return (
    <Container>
      {/* <Introduction /> */}
      <Projects />
      <Contact />
    </Container>
  );
};
export default Main;
