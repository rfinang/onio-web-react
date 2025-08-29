import styled from "styled-components";

export const DataTooltipStyled = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 1.8rem;
    
    p{
        margin: 0;
    }
    
    .text-56{
        font-size: 5.6rem;
        line-height: 5rem;

        @media screen and (max-width: 768px){
            font-size: 5rem;
            line-height: 6rem;
        }
    }

    .text-48{
        font-size: 4.8rem;
        line-height: 5.6rem;

        @media screen and (max-width: 768px){
            font-size: 5rem;
            line-height: 6rem;
        }
    }

    .text-27{
        font-size: 2.7rem;
        line-height: 5rem;

        @media screen and (max-width: 768px){
            font-size: 1.8rem;
            line-height: 2.6rem;
        }
        
    }
`