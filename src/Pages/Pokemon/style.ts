import styled from "styled-components";

export const Container = styled.div`
    background-image: url('https://1.bp.blogspot.com/-iIDPZD1siWs/XpBogZh4ExI/AAAAAAAABsw/scxMSkyaQbkJaVSXCrCpe81TQLBpTjuFgCLcBGAsYHQ/s1600/NSwitch_PokemonSwordShield_01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 0.75rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const FlexContent = styled.div`
    display: flex;
    align-items: baseline;
    height: min-content;
`

export const Figure=styled.figure`
    img{
        transition: all 0.3s;
        box-sizing: border-box;
    }
    :hover{
        img{
            transform: scale(1.1);
        }
    }
`

export const Name = styled.h1`
    font-size: 3rem;
    font-family: var(--pokemon-font-primary);
    color: var(--yellow-color);
    -webkit-text-stroke-color: var(--blue-color);
    -webkit-text-stroke-width: 0.1rem;
    letter-spacing: 0.3rem;
    ::first-letter{
        text-transform: capitalize;
    }
`

export const TypeContent = styled.div`
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    width: max-content;
    padding: 0.5rem;
    .type{
        color: #fff;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    .typeGrid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
    }
`

export const MovesContent = styled.div`
    background: rgba(0, 0, 0, 0.7);
    border-radius: 0.5rem;
    height: 15rem;
    margin-top: 1rem;
    padding: 1rem;
    overflow-y: auto;

    p{
        color: #fff;
        ::first-letter{
            text-transform: capitalize;
        }
        text-align: justify;
    }
`

export const AbilitiesContent = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.6);
    max-height: 11rem;
    overflow-y: auto;
`
export const PowerDescribe = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    img{
        width: 1.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
    p{
        color: #fff;
        ::first-letter{
            text-transform: capitalize;
        }
    }
`

export const TitleSection = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;
`

