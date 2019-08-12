import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #C6DEA6;
`;

export const SectionHeader = styled.div`
  font-size: 2rem;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FCFFFC;
`;

export const Project = styled.div`
  margin: 0 60px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #424B54;
`;

export const ProjectTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 15px;
`;

export const ProjectLinks = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const ProjectLink = styled.a`
  background: #FCFFFC;
  text-decoration: none;
  width: 125px;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #0A0908;

  &:hover {
    background: #C6DEA6;
  }
`;

export const AboutProject = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 15px;
  margin-bottom: 0;
`;

export const AboutDescription = styled.h3`
  width: 70%;
`;

export const AboutList = styled.ul`
  background: red;
  display: flex;
  margin: 0px 15px;
  // flex-direction: column;
  justify-content: space-between;
`;

export const TechItem = styled.li`
  margin: 0px 10px;
`;

export const GalleryStyles = styled.div`
  margin: 15px;
  // height: 300px;
  // width: 300px;
`;
