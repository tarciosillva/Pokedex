import styled from "styled-components";

export const Container = styled.div`
    background-image: url('https://sm.ign.com/ign_br/screenshot/default/galar-artwork_8akt.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 80vw;
    padding: 1rem;
    margin: 0 auto;
    height: 100vh;
    overflow-y: auto;
`

export const AboutMe=styled.div`
    background-color: var(--blue-color);
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    .link{
        font-size: 1.5rem;
        padding: 0.5rem;
        font-weight: 600;
        color: #fff;
    }

    :hover{
        .link{
            font-size: 1.75rem;
        }
    }
`

export const GridItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap:2rem;
    justify-content: center;
`

export const ActionsConntainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap:2rem;
    padding: 1rem;
    background-color: #fff;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
`

export const ContentButton=styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
`

export const Button=styled.button`
    border: none;
    padding: 0.85rem;
    border-radius: 0.5rem;
    background-color: var(--blue-color);
    color: #fff;
    font-weight: 600;
    font-size: 1.1rem;
    border: 0.2rem solid #fff;
    transition: 0.8s;
    cursor: pointer;
    :hover{
        background-color: #072d68;
    }
`