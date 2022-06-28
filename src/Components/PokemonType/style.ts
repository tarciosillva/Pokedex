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
    }
`

