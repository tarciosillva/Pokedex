import styled from "styled-components";

export const Container = styled.div`
    height: min-content;
    background-image: url('https://1.bp.blogspot.com/-iIDPZD1siWs/XpBogZh4ExI/AAAAAAAABsw/scxMSkyaQbkJaVSXCrCpe81TQLBpTjuFgCLcBGAsYHQ/s1600/NSwitch_PokemonSwordShield_01.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 0.5rem;
    border: 0.15rem solid #fff;
    figure{
        :hover{
            img{
                transform: scale(1.3);
            }
        }
    }

    img{
        width: 11rem;
        height: 11rem;
        margin: 1rem;
        transition: all 0.3s;
        box-sizing: border-box;
    }
    
    cursor: pointer;

    :hover{
        box-shadow: 0px 0px 20px 5px #e1e1e1;
    }
`

export const Name = styled.p`
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    ::first-letter{
        text-transform: capitalize;
    }
`

export const PokemonId = styled.div`
    padding: 0.5rem;
    border-radius: 50%;
    width: 2rem;
    background-color: var(--dark-color);
    margin: 0.25rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
`