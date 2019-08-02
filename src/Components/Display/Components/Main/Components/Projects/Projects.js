import React from 'react';

// CHILD COMPONENTS
import Gallery from './Components/Gallery/Gallery';

// FONT AWESOME ICONS
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import {
    faGithubSquare
} from '@fortawesome/free-brands-svg-icons'

// MEDIA IMPORTS
import {HorizonFLMMedia, JobberMedia} from './Components/Gallery/MediaManager';

// STYLED COMPONENTS
import {
    Container,
    SectionHeader,
    ProjectsList,
    Project
  } from './ProjectsStyles';

const Projects = () => {
    return (
        <Container>
            <SectionHeader>
                <h1>Check out some of my past work!</h1>
            </SectionHeader>
            <ProjectsList>
                <Project>
                    <h1>Horizon Flight Management</h1>
                    <h3>Project Description</h3>
                    <div>
                        <button><FontAwesomeIcon icon={faLaptopCode}/> Visit project</button>
                        <button><FontAwesomeIcon icon={faGithubSquare}/> Visit repo</button>
                    </div>
                    <Gallery media={HorizonFLMMedia} />
                </Project>
                <Project>
                    <h1>Jobber</h1>
                    <h3>Project Description</h3>
                    <div>
                        <button><FontAwesomeIcon icon={faLaptopCode}/> Visit project</button>
                        <button><FontAwesomeIcon icon={faGithubSquare}/> Visit repo</button>
                    </div>
                    <Gallery media={JobberMedia} />
                </Project>
            </ProjectsList>
        </Container>
    )
}
export default Projects;