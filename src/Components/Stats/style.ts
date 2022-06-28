import styled from "styled-components";

import {devices} from "../../Style/Resposive"

interface statProps{
    bacgroundColor:string
}

export const Stat=styled.div<statProps>`
    background-color: ${props=>props.bacgroundColor};
    border-radius: 0.5rem;
    text-align: center;
    color: #fff;
    padding: 0.5rem;
    border: 0.1rem #fff solid;
    .value{
        font-size: 1.2rem;
    }
`

