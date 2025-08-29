import styled from "styled-components";

export const PowerTimelineStyled = styled.div`
    .gap-65{
        gap: 6.5rem;
        @media screen and (max-width: 1024px) {
            gap: 1rem;
        }
    }
    
    .p-64{
        padding: 0 6.4rem !important;
        @media screen and (max-width: 1280px) {
            padding: 0 0 0 12rem  !important;
        }
        @media screen and (max-width: 768px) {
            padding: 0 0 0 6rem !important;
        }
        @media screen and (max-width: 430px) {
            padding: 0 0 0 2rem !important;
        }
        
    }
    
    .mt-30{
        margin-top: 3rem;
    }
    
    .chartPowerTimeLine{
        width: 75%;
        
        @media screen and (max-width: 1024px) {
            flex-direction: column;
            width: 100%;
        }
    }
    
    .valuePowerTimeLine{
        width: 25%;
        @media screen and (max-width: 1024px) {
            width: 100%;
        }
    }
`