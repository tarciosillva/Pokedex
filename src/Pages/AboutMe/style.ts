import styled from "styled-components";

export const Container=styled.div`
    display: grid;
    justify-content: center;
    width: 70vw;
    margin: 0 auto;
    padding: 1rem;

    @media${`(max-width: 1024px)`}{
        width: 80vw;
    }

    @media${`(max-width: 900px)`}{
        width: 100vw;
    }
`

export const ApresentationContainer=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;

    @media${`(max-width: 750px)`}{
        display: block;
        margin: 0 auto;
    }
`

export const ImageContent=styled.div`
    padding: 0.5rem;
    img{
        border: 0.5rem solid #fff;
        border-radius: 50%;
        width: 24rem;
    }

    @media${`(max-width: 540px)`}{
        display: flex;
        justify-content: center;
        margin-bottom:2rem;
        img{
            width: 20rem;
        }
    }

    @media${`(max-width: 376px)`}{
        img{
            width: 16rem;
        }
    }
`

export const InitialDescribeMe=styled.div`
    margin-bottom: 1rem;
    font-size: 1.1rem;
    h1{
        font-size: 2.5rem;
    }
    p{
        font-size: 2rem;
    }
    @media${`(max-width: 540px)`}{
        text-align:center;
        p, h1{
            text-align:center;
        }
    }
`

export const Section=styled.section`
    padding: 1rem;
    .title{
        font-size: 2.5rem;
    }

    ul{
        padding: 1.5rem;
        li{
            margin-bottom: 1rem;
            p{
                margin-bottom: 0.5rem;
            }
            div{
                text-align: justify;
                color: #717171;
            }
        }
    }

    @media${`(max-width: 540px)`}{
        .title{
            font-size: 1.5rem;
        }
    }
   
`
