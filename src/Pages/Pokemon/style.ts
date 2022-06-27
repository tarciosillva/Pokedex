import styled from "styled-components";

export const Container = styled.div`
    background-image: url('https://1.bp.blogspot.com/-iIDPZD1siWs/XpBogZh4ExI/AAAAAAAABsw/scxMSkyaQbkJaVSXCrCpe81TQLBpTjuFgCLcBGAsYHQ/s1600/NSwitch_PokemonSwordShield_01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const FlexContent = styled.div`
    display: flex;
`

export const Name = styled.h1`
    font-size: 3rem;
    ::first-letter{
        text-transform: capitalize;
    }
`

export const Id = styled.div`
    margin-top: 1.5rem;
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
`

export const TypeContent = styled.div`
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    width: max-content;
    .type{
        color: #fff;
        font-weight: 700;
        font-size: 2rem;
        padding: 1rem;
    }
    .typeGrid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
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
    }
`

export const AbilitiesContent = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.6);
    max-height: 10rem;
    overflow-y: auto;

    .powerDescribe{
        display: flex;
        align-items: center;
        padding: 0.5rem;
        img{
            width: 1.5rem;
            border-radius: 50%;
            margin-right: 1rem;
        }
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

