import styled from "styled-components";

export const PoweredProfilerStyled = styled.div`
    
    .powered__title{
        margin-bottom: 8rem;
        @media screen and (max-width: 1023.97px){
            margin-bottom: 3.2rem;
        }
    }
    .powered:before {
        background: var(--onio-color-primary);
        z-index: 0;
        content: "";
        display: block;
        top: -6rem;
        height: 10rem;
        width: 100%;
        position: absolute;
        left: 0;
    }
    
    .solved{
        :before{
            display: none;
        }
        
        :after {
            background: var(--onio-color-background);
        }
    }

   
    
    .text-90 {
        font-size: 9rem;
        line-height: 12.4rem;

        @media screen and (max-width: 768px){
            font-size: 5rem;
            line-height: 6rem;
        }
    }
    
    .text-primary{
        color: #222121 !important;
    }
`