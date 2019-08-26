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
            A project to create a synonymous experience for fixed base
            operators, flight crews, ground crews, and passengers. This platform
            allows users to manage preferences, requests for services,
            schedules, and aircraft parking or hangar space.
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
              href="https://www.horizonflight.management"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <LinkText>Live Project</LinkText>
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ProPiloty/horizon"
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
            A platform that allows businesses to create and track bids, manage a
            basic schedule, and their customer's information.
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
              href="http://startjobber.us/"
            >
              <FontAwesomeIcon icon={faLaptopCode} />
              <LinkText>Live Project</LinkText>
            </ProjectLink>
            <ProjectLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bid-wars/bid-wars"
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
