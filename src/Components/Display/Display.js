import React from "react";

// CHILD COMPONENTS
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";

// STYLED COMPONENTS
import {
  Container
} from './DisplayStyles';

// DISPLAY COMPONENT
const Display = () => {
  return (
    <Container>
      <Hero />
      <Main />
    </Container>
  );
};
export default Display;
