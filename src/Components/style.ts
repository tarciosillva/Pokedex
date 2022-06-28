import styled from "styled-components";
import{devices} from "../Style/Resposive"

export const Container=styled.div`
    p{
        font-size: 1rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    @media${devices.tvk}{
        justify-self: center;
    }
`

export const Input=styled.input`
    border-radius: 0.2rem;
    border: none;
    padding: 0.75rem;
    width: 20rem;

    @media${devices.laptop}{
        width: 100%;
    }
`

export const Button=styled.button`
    padding: 0.75rem;
    border-radius: 0.3rem;
    border: none;
    margin-left: 0.3rem;
    background-color: #4dad5b;
    color: #fff;
    font-weight: 700;

    cursor: pointer;
    transition: 500ms;
    :hover{
        background-color: var(--dark-color);
        box-shadow: 0px 1px 13px 4px white;
    }

    @media${devices.laptop}{
        width: 100%;
        margin-top:0.5rem;
        margin-left: 0;
    }
`

