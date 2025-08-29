import styled from "styled-components";

export const EnergyStyled = styled.div`
    width: 100%;
    .mb-52{
        margin-bottom: 5.2rem;
    }
    
    .addBtn{
        border: .2rem solid #fff;
        border-radius: 1rem;
        padding: 1rem 1.4rem;
        background: transparent;
        text-underline-offset: 3px;

        @media screen and (max-width: 767.96px) {
            padding: .8rem 3.6rem;
            font-size: 2rem !important;
            min-width: 0 !important;
        }
    }

    .clearBtn{
     
        @media screen and (max-width: 767.96px) {
            font-size: 2rem !important;
            text-underline-offset: 3px;
        }
    }
    
`