import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

// PARENT CONTAINER FOR HERO COMPONENT
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background: #424b54;
  color: #fcfffc;
  border-bottom: 1px solid #0a0908;

  @media (${device.laptop}) {
    width: 30vw;
    height: 100vh;
  }
`;

// CONTENT CONTAINER FOR HERO
export const Separator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// HEADSHOT PHOTO
export const HeadShot = styled.img`
  margin: 30px 0px 0px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;

// PERSONAL INTRODUCTION
export const Intro = styled.h3`
  margin: 30px 30px 0px;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
`;

// ABOUT ME
export const Summary = styled.h4`
  margin: 30px 30px 0px;
  font-family: "Cabin", sans-serif;
  font-size: 1.2rem;
  text-indent: 1rem;
`;

// PARENT COMPONENT FOR SOCIAL LINKS
export const SocialContainer = styled.div`
  margin: 30px 30px 30px;
  font-size: 2rem;
`;

// INDIVIDUAL SOCIAL LINK
export const SocialLink = styled.a`
  margin: 0px 15px;
  color: #fcfffc;

  &:hover, &:focus {
    color: #7ebdc3;
    outline: none;
  }
`;

// COPYWRITE INFORMATION
export const Legal = styled.div`
  margin: 0px 30px 15px;
  display: none;

  @media (${device.laptop}) {
    display: initial;
  }
`;
