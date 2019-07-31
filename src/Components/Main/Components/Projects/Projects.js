import React from 'react';

// CHILD COMPONENTS
import Gallery from './Components/Gallery/Gallery';

// MEDIA IMPORTS
import {HorizonFLMMedia, JobberMedia} from './Components/Gallery/PhotoManager';

const Projects = () => {
    return (
        <div>
            <div>
                <h1>Projects Component</h1>
            </div>
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
        </div>
    )
}
export default Projects;