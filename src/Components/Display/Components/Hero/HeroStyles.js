import styled from 'styled-components';
import { device } from './../../../Devices';

export const Container = styled.header `
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 400px;
  width: 100%;
  background: gray;

  @media(${device.laptop}) {
    width: 30vw;
    height: 100vh;
    // background: gray;
  }
`

export const HeadShot = styled.img `
  margin-top: 30px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`

export const Summary = styled.div `
  margin: 30px 60px;
`

export const SocialLinks = styled.div `
  margin-bottom: 30px;
  font-size: 2rem;
`

export const SocialLink = styled.a `
  margin: 15px;
  color: black;

  &:hover {
    color: red;
  }
`

export const Legal = styled.div `
  display: none;

  @media(${device.laptop}) {
    display: initial;
  }
`