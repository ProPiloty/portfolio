import styled from 'styled-components';
import { device } from './../Devices';

export const CompName = styled.div `
    background: black;
    @media(max-width: ${device.laptop}) {
      background: white;
    }
`

export const Container = styled.header `

`

export const Summary = styled.div `

`

export const HeadShot = styled.img `
    height: 100px;
    width: 100px;
    vertical-align: middle;
    border-radius: 50%;
`