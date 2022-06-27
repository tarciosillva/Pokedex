import styled from "styled-components";

export const Container=styled.div`
    p{
        font-size: 1rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }
`

export const Input=styled.input`
    border-radius: 0.2rem;
    border: none;
    padding: 0.75rem;
    width: 20rem;
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
`

