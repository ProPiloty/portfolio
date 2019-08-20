import styled from 'styled-components';
import { device } from './../../utils/Devices';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  // width: 100vw;
  
  @media(${device.laptop}) {
    flex-direction: row;
  }
`

export const Main = styled.div`
  @media (${device.laptop}) {
    width: 70vw;
    height: 100vh;
    overflow-y: scroll;
  }
`;
