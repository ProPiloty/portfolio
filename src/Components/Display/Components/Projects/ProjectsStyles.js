import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

// PARENT CONTAINER FOR PROJECTS COMPONENT
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcfffc;
  border-bottom: 1px solid #424b54;
`;

// PROJECTS TITLE
export const SectionHeader = styled.h1`
  margin-top: 30px;
  font-size: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  @media (${device.tablet}) {
    // font-size: 2rem;
  }
`;

// PROJECT LIST PARENT CONTAINER
export const ProjectsList = styled.div`
  margin: 0px 0px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// INDIVIDUAL PROJECT CONTAINER
export const Project = styled.div`
  margin: 30px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #c6dea6;
  border-radius: 5px;
  border: 1px solid #424b54;

  &:hover {
    border-color: #0a0908;
  }
`;

// TITLE OF PROJECT
export const ProjectTitle = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: 15px;
  @media (${device.tablet}) {
    font-size: 2rem;
  }
`;

// PROJECT LINKS CONTAINER
export const ProjectLinks = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  border: 1px dotted red;
`;

// LINKS TO LIVE PROJECT AND GITHUB REPO
export const ProjectLink = styled.a`
  background: #fcfffc;
  text-decoration: none;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #0a0908;
  border-radius: 5px;
  border: 1px solid #424b54;

  &:hover {
    color: #fcfffc;
    background: #424b54;
    border-color: #0a0908;
  }
`;

// TEXT WITHIN PROJECT LINKS
export const LinkText = styled.span`
  margin-left: 10px;
`;

// BASIC DESCRIPTION OF THE PROJECT
export const Description = styled.h3`
  margin: 10px 15px 0px;
  font-family: "Cabin", sans-serif;
  text-align: center;
`;

// TECHNOLOGIES USED HEADER
export const TechTitle = styled.h3`
  margin: 10px 0px 0px;
  font-size: 1.0rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
`;

// LIST OF TECH USED IN THE PROJECT
export const TechList = styled.ul`
  display: flex;
  margin: 10px 0px 0px;
  justify-content: space-between;
  font-size: 1rem;
  font-family: "Cabin", sans-serif;
`;

// INDIVIDUAL TECH USED IN THE PROJECT
export const TechItem = styled.li`
  padding: 0px 5px;
  border-right: 1px solid #000000;
  &:last-child {
    border-right: none;
  }
`;

// STYLES FOR GALLERY
export const GalleryStyles = styled.div`
  margin: 15px;
`;
