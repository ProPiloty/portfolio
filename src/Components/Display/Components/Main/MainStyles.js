import styled from "styled-components";
import { device } from "./../../../Devices";

export const Container = styled.div`
  @media (${device.laptop}) {
    width: 70vw;
    height: 100vh;
    overflow-y: scroll;
  }
`;
