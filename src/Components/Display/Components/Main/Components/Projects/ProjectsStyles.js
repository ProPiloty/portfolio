import styled from "styled-components";
import { device } from "./../../../../../Devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionHeader = styled.div`
  font-size: 2rem;
`;

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Project = styled.div`
  margin: 0 60px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: aquamarine;
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
  background: white;
  text-decoration: none;
  width: 125px;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;

  &:hover {
    background: green;
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
  // flex-direction: column;
  justify-content: space-between;
`;

export const GalleryStyles = styled.div`
  margin: 15px;
  // height: 300px;
  // width: 300px;
`;
