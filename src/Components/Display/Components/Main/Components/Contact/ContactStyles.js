import styled from "styled-components";
import {device} from "./../../../../../Devices";

export const Container = styled.div`
  background: black;
  @media (max-width: ${device.laptop}) {
    background: white;
  }
`;

export const Legal = styled.div`
  @media (${device.laptop}) {
    display: none;
  }
`;
