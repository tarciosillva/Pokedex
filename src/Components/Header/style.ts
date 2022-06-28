import styled from "styled-components";

export const HeaderContainer=styled.header`
    background: rgba(0, 0, 0, 0.4);
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: 0fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    grid-gap: 1rem;

    .radiusImg{
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }
    h1{
        font-size: 2rem;
    }

    @media${`(max-width: 768px)`}{
        .radiusImg{
            width: 5rem;
            height: 5rem;
        }

        .pokedexImg{
            width: 15rem;
        
        }
    }

    @media${`(max-width: 522px)`}{
        .radiusImg{
            width: 3rem;
            height: 3rem;
        }

        .pokedexImg{
            width: 10rem;
        
        }
    }

    @media${`(max-width: 375px)`}{
        .radiusImg{
            width: 2rem;
            height: 2rem;
        }

        .pokedexImg{
            width: 8rem;
        
        }
    }
`