import React from "react";

// CHILD COMPONENTS
import Gallery from "./Components/Gallery/Gallery";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

// MEDIA IMPORTS
import { HorizonFLMMedia, JobberMedia } from "../../../../utils/MediaManager";

// STYLED COMPONENTS
import {
  Container,
  SectionHeader,
  ProjectsList,
  Project,
  ProjectTitle,
  ProjectLinks,
  ProjectLink,
  Description,
  TechList,
  TechItem,
  GalleryStyles
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container>
      <SectionHeader>My Past Projects</SectionHeader>
      <ProjectsList>
        <Project>
          <ProjectTitle>Horizon Flight Management</ProjectTitle>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faLaptopCode} /> Live Project
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faGithubSquare} /> GitHub Repo
            </ProjectLink>
          </ProjectLinks>
          <Description>
            A personal project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers.
          </Description>
          <h3>technologies used</h3>
          <TechList>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSQL</TechItem>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSQL</TechItem>
          </TechList>
          <GalleryStyles>
            <Gallery media={HorizonFLMMedia} />
          </GalleryStyles>
        </Project>
        <Project>
          <ProjectTitle>Jobber</ProjectTitle>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faLaptopCode} /> Live Project
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faGithubSquare} /> GitHub Repo
            </ProjectLink>
          </ProjectLinks>
          <Description>
            A personal project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers.
          </Description>
          <h3>technologies used</h3>
          <TechList>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSQL</TechItem>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSQL</TechItem>
          </TechList>
          <GalleryStyles>
            <Gallery media={JobberMedia} />
          </GalleryStyles>
        </Project>
      </ProjectsList>
    </Container>
  );
};
export default Projects;
