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
} from "../../../../utils/MediaManager";

// STYLED COMPONENTS
import {
  Container,
  SectionHeader,
  ProjectsList,
  Project,
  ProjectTitle,
  ProjectLinks,
  ProjectLink,
  AboutProject,
  AboutDescription,
  AboutList,
  TechItem,
  GalleryStyles
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container>
      <SectionHeader>
        <h1>My Past Projects</h1>
      </SectionHeader>
      <ProjectsList>
        <Project>
          <ProjectTitle>Horizon Flight Management</ProjectTitle>
          <ProjectLinks>
            <ProjectLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faLaptopCode} /> Live Project
            </ProjectLink>
            <ProjectLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faGithubSquare} /> GitHub Repo
            </ProjectLink>
          </ProjectLinks>
          <AboutDescription>
            A personal project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers.
          </AboutDescription>
          <AboutList>
            {/* <li>Technologies Used</li> */}
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSql</TechItem>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSql</TechItem>
          </AboutList>
          <GalleryStyles>
            <Gallery media={HorizonFLMMedia} />
          </GalleryStyles>
        </Project>
        <Project>
          <ProjectTitle>Jobber</ProjectTitle>
          <ProjectLinks>
            <ProjectLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faLaptopCode} /> Live Project
            </ProjectLink>
            <ProjectLink target="_blank" rel="noopener noreferrer" href="https://www.youtube.com" >
              <FontAwesomeIcon icon={faGithubSquare} /> GitHub Repo
            </ProjectLink>
          </ProjectLinks>
          <h3>
            A platform that allows businesses to create and track bids, manage a
            basic schedule, and their customer's information.
          </h3>
          <GalleryStyles>
            <Gallery media={JobberMedia} />
          </GalleryStyles>
        </Project>
      </ProjectsList>
    </Container>
  );
};
export default Projects;
