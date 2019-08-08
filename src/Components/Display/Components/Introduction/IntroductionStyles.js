import styled from 'styled-components';
import { device } from "./../../../../utils/Devices";

export const CompName = styled.div `
    background: black;
    @media(max-width: ${device.laptop}) {
        background: white;
    }
`