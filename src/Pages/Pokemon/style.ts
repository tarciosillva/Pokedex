import styled from "styled-components";

import {devices} from "../../Style/Resposive"

export const Container = styled.div`
    background-image: url('https://1.bp.blogspot.com/-iIDPZD1siWs/XpBogZh4ExI/AAAAAAAABsw/scxMSkyaQbkJaVSXCrCpe81TQLBpTjuFgCLcBGAsYHQ/s1600/NSwitch_PokemonSwordShield_01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    padding: 0.75rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media${`(max-width: 768px)`}{
        display: block;
        max-height: 100vh;
        overflow-y:auto;
    }
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


    @media${`(max-width: 1440px)`}{
        img{
            width:23rem;
        }
    }

    @media${`(max-width: 768px)`}{
        display:flex;
        justify-content:center;
        img{
            width:25rem;
        }
    }

    @media${`(max-width: 425px)`}{
        display:flex;
        justify-content:center;
        img{
            width:20rem;
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

    @media${`(max-width: 1440px)`}{
        font-size: 3rem;
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

    @media${`(max-width: 768px)`}{
        width: 100%;
    }

    @media${`(max-width: 425px)`}{
        .type{
            font-size: 1.5rem;
        }
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

    @media${`(max-width: 1440px)`}{
        font-size: 1rem;
        height: 15rem;
    }
`

export const AbilitiesContent = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.6);
    max-height: 11rem;
    overflow-y: auto;

    @media${`(max-width: 1440px)`}{
        height: auto;
    }
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

    @media${`(max-width: 1440px)`}{
        font-size: 1rem;
        img{
            width: 1.1rem;
            border-radius: 50%;
            margin-right: 0.5rem;
        }
    }

    @media${`(max-width: 768px)`}{
        font-size:1.5rem;
        img{
            width: 2rem;
            border-radius: 50%;
            margin-right: 0.5rem;
        }
    }

    @media${`(max-width: 425px)`}{
        font-size: 1.25rem;
        img{
            width: 1.5rem;
        }
    }
`

export const TitleSection = styled.p`
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1rem;

    @media${`(max-width: 425px)`}{
        font-size: 1.25rem;
    }
`
export const StatsContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap:2rem;
    justify-content: center;
    margin-top: 1rem;
    max-height: 20rem;
    overflow-y: auto;
`

