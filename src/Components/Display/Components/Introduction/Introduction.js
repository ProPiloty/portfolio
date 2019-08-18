import React from 'react';

// STYLED COMPONENTS
import {
    Container
  } from './IntroductionStyles';

const Introduction = () => {
    return (
        <Container>
            <h1>Introduction Component</h1>
            <ul>
                <li>SKILLS</li>
                <li>React</li>
                <li>Node</li>
                <li>PostgreSQL</li>
            </ul>
        </Container>
    )
}
export default Introduction;