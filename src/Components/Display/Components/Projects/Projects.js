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
  LinkText,
  Description,
  TechTitle,
  TechList,
  TechItem,
  GalleryStyles
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <Container>
      <SectionHeader>My Projects</SectionHeader>
      <ProjectsList>
        <Project>
          <ProjectTitle>Horizon Flight Management</ProjectTitle>
          <Description>
            A personal project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers.
          </Description>
          <TechTitle>Technologies used</TechTitle>
          <TechList>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSQL</TechItem>
          </TechList>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <LinkText>Live Project</LinkText>
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
              <LinkText>GitHub Repo</LinkText>
            </ProjectLink>
          </ProjectLinks>
          <GalleryStyles>
            <Gallery media={HorizonFLMMedia} />
          </GalleryStyles>
        </Project>
        <Project>
          <ProjectTitle>Jobber</ProjectTitle>
          <Description>
            A personal project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers.
          </Description>
          <TechTitle>Technologies used</TechTitle>
          <TechList>
            <TechItem>React</TechItem>
            <TechItem>Node</TechItem>
            <TechItem>PostgreSQL</TechItem>
          </TechList>
          <ProjectLinks>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <LinkText>Live Project</LinkText>
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
              <LinkText>GitHub Repo</LinkText>
            </ProjectLink>
          </ProjectLinks>
          <GalleryStyles>
            <Gallery media={JobberMedia} />
          </GalleryStyles>
        </Project>
      </ProjectsList>
    </Container>
  );
};
export default Projects;
