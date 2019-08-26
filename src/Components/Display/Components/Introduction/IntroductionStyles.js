import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

// PARENT CONTAINER FOR PROJECTS COMPONENT
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #7ebdc3;
  border-bottom: 1px solid #424b54;
`;

// INTRODUCTION TITLE
export const SectionHeader = styled.h1`
  margin-top: 30px;
  font-size: 2rem;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  @media (${device.tablet}) {
    font-size: 2.5rem;
  }
`;

// SKILLS LIST
export const SkillsList = styled.ul`
  margin: 0px 0px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(${device.tablet}){
    flex-direction: row;
  }
`;

// SKILL LIST ITEM
export const Skill = styled.li`
  margin: 30px 0px 0px;
  padding: 0px 15px;
  font-family: "Cabin", sans-serif;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(${device.tablet}){
    border-right: 1px solid #000000;
    &:last-child {
      border-right: none;
    }
  }
`

// SKILL ITEM TITLE
export const SkillTitle = styled.h3`
  margin: 15px 0px 0px;
  text-align: center;
  font-size: 1rem;
  
  @media(${device.tablet}){
    border-right: 1px solid #000000;
    &:last-child {
      border-right: none;
    }
  }
`