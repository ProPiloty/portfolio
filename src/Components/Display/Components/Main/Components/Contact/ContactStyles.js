import styled from "styled-components";
import { device } from "./../../../../../Devices";

export const Container = styled.div`
  background: gray;
  @media (max-width: ${device.laptop}) {
  }
`;

export const ContactForm = styled.form `
  display: flex;
  flex-direction: column;
`

export const Legal = styled.div`
  @media (${device.laptop}) {
    display: none;
  }
`;
