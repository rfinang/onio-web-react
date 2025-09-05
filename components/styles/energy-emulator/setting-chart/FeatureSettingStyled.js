import styled from "styled-components";

export const FeatureSettingStyled = styled.div`
    .inputStage {
        height: 3.4rem;
        margin-top: 4.2rem;
        padding-bottom: 1.2rem;
        padding-left: 0;
        border-bottom: .2rem solid var(--onio-color-white);

        @media screen and (max-width: 767.95px) {
            margin-top: 3.3rem;
        }
    }
    
    .gap-32{
        gap: 3.2rem;
        @media screen and (max-width: 1024px) {
            gap: 2.4rem
        }
    }
    
`