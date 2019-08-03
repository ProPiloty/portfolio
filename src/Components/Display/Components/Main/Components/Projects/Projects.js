import React from "react";

// CHILD COMPONENTS
import Gallery from "./Components/Gallery/Gallery";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

// MEDIA IMPORTS
import {
  HorizonFLMMedia,
  JobberMedia
} from "./Components/Gallery/MediaManager";

// STYLED COMPONENTS
import {
  Container,
  SectionHeader,
  ProjectsList,
  Project,
  GalleryStyles
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container>
      <SectionHeader>
        <h1>Check out some of my past work!</h1>
      </SectionHeader>
      <ProjectsList>
        <Project>
          <h1>Horizon Flight Management</h1>
          <h3>
            A personal project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers.
          </h3>
          <GalleryStyles>
            <Gallery media={HorizonFLMMedia} />
          </GalleryStyles>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faLaptopCode} /> Visit project
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faGithubSquare} /> Visit repo
            </a>
          </div>
        </Project>
        <Project>
          <h1>Jobber</h1>
          <h3>
            A platform that allows businesses to create and track bids, manage a
            basic schedule, and their customer's information.
          </h3>
          <GalleryStyles>
            <Gallery media={JobberMedia} />
          </GalleryStyles>
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faLaptopCode} /> Visit project
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faGithubSquare} /> Visit repo
            </a>
          </div>
        </Project>
      </ProjectsList>
    </Container>
  );
};
export default Projects;
