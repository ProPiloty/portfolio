import styled from 'styled-components';
import { device } from './../Devices';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  
  @media(${device.laptop}) {
    flex-direction: row;
  }
`

