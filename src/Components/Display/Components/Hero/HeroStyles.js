import styled from 'styled-components';
import { device } from './../../../Devices';

export const Container = styled.header `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: red;

  @media(${device.laptop}) {
    width: 30vw;
    height: 100vh;
    background: blue;
  }
`

export const HeadShot = styled.img `
  height: 150px;
  width: 150px;
  border-radius: 50%;
`

export const Summary = styled.div `
`

export const Legal = styled.div `
  display: none;

  @media(${device.laptop}) {
    display: initial;
  }
`