import styled from 'styled-components';
import { device } from "./../../../../utils/Devices";

export const Container = styled.div `
    background: #7EBDC3;
    @media(max-width: ${device.laptop}) {
        // background: white;
    }
`