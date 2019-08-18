import styled from "styled-components";
import { device } from "./../../../../utils/Devices";

export const Container = styled.div`
  background: #7EBDC3;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${device.laptop}) {
  }
`;

export const ContactForm = styled.form `
  margin: 30px 30px 0px;
  display: flex;
  flex-direction: column;
`

export const Legal = styled.div`
  @media (${device.laptop}) {
    display: none;
  }
`;
