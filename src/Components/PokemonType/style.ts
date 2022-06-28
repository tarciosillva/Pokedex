import styled from "styled-components";

export const Container = styled.div`
    div{
        display: flex;
        align-items: center;
        img{
            width: 3rem;
            margin-right: 1rem;
        }
        p{
            color: #fff;
            font-size: 1.75rem;
            ::first-letter{
                text-transform: capitalize;
            }
        }

        @media${`(max-width: 425px)`}{
            img{
                width: 1.5rem;
            }
            p{
                font-size: 1.25rem;
            }
        }
    }
`

