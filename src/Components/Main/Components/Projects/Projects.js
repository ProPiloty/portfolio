import React from 'react';

// CHILD COMPONENTS
import Gallery from '../../../Gallery/Gallery';

// MEDIA IMPORTS
import {HorizonFLMMedia, JobberMedia} from '../../../Gallery/MediaManager';

// STYLED COMPONENTS
import {
    Container,
    SectionHeader,

  } from './ProjectsStyles';

const Projects = () => {
    return (
        <Container>
            <SectionHeader>
                <h1>My Projects</h1>
            </SectionHeader>
            <div>
                <div>
                    <h1>Horizon Flight Management</h1>
                    <h3>Project Description</h3>
                    <div>
                        <button>Visit project</button>
                        <button>Visit repo</button>
                    </div>
                    <Gallery media={HorizonFLMMedia} />
                </div>
                <div>
                    <h1>Jobber</h1>
                    <h3>Project Description</h3>
                    <div>
                        <button>Visit project</button>
                        <button>Visit repo</button>
                    </div>
                    <Gallery media={JobberMedia} />
                </div>
            </div>
        </Container>
    )
}
export default Projects;