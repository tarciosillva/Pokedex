import styled from "styled-components";

export const Container=styled.div`
    background-image: url('https://sm.ign.com/ign_br/screenshot/default/galar-artwork_8akt.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: max-content;
    padding: 2rem;
    margin: 0 auto;
    height: 100vh;
    overflow-y: auto;
`

export const GridItems=styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap:2rem;
    justify-content: center;
`

export const ActionsConntainer=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
`
