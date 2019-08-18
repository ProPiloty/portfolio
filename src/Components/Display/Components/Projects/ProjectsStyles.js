import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

// PARENT CONTAINER FOR PROJECTS COMPONENT
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfffc;
`;

// PROJECTS TITLE
export const SectionHeader = styled.h1`
  margin-top: 30px;
  font-size: 2rem;
`;

// PROJECT LIST PARENT CONTAINER
export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

// INDIVIDUAL PROJECT CONTAINER
export const Project = styled.div`
  margin: 30px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #c6dea6;
`;

// TITLE OF PROJECT
export const ProjectTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 15px;
`;

// PROJECT LINKS CONTAINER
export const ProjectLinks = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

// LINKS TO LIVE PROJECT AND GITHUB REPO
export const ProjectLink = styled.a`
  background: #fcfffc;
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #0a0908;

  &:hover {
    background: #c6dea6;
  }
`;

//
export const Description = styled.h3`
  margin: 10px 15px 0px;
  width: 70%;
`;

export const TechList = styled.ul`
  display: flex;
  margin: 10px 15px 0px;
  justify-content: space-between;
  font-size: 10px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
`;

export const TechItem = styled.li`
  padding: 0px 5px;
  border-right: 1px solid #000000;
  &:last-child {
    border-right: none;
  }
`;

export const GalleryStyles = styled.div`
  margin: 15px;
`;
