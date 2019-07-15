import React from 'react';

// Component Imports
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

// Main Component
const Main = () => {
    return (
        <div>
            <Introduction />
            <Projects />
            <Contact />
        </div>
    )
}
export default Main;