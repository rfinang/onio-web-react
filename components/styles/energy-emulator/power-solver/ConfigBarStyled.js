import styled from "styled-components";

export const ConfigBarStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .titleConfigBar {
        width: 100%;
        .inputStage{
            width: 40%;
            @media screen and (max-width: 1199.96px) {
                    width: 55%;
                    border-bottom: .2rem var(--onio-color-primary) solid;
            }
        }
        
       
    }
    
    .selectConfigBar{
        width: 100%;
        display: flex;
        justify-content: center;
        .selectConfigBarWrapper{
            width: 40%;
            @media screen and (max-width: 1199.96px) {
                width: 55%;
            }
        }
    }

    @media screen and (max-width: 1023.97px) {
        gap: 2rem;
        .titleConfigBar {
            flex-grow: 1;
            padding-top: 8px;

            /*.configBar {
                display: none;
            }*/

            .inputStage {
                border-bottom: .2rem solid var(--onio-color-primary);
            }

        }

        .selectConfigBar {
            min-width: 7rem;
            padding-bottom: 12px;

            span {
                align-items: end !important;
            }
        }
    }

    @media screen and (max-width: 767.96px) {
        .titleConfigBar {
            padding-top: 1.8rem;
        }
    }

    @media screen and (max-width: 468.97px) {
        width: 100%;
        .titleConfigBar {
           .form-group{
               display: flex;
               flex-direction: column;
               justify-content: center;
           }
            
            width: 100%;

            .inputStage {
                width: 60%;
            }
        }

        .selectConfigBar {
            width: 100%;
            display: flex;
            justify-content: center;
            .selectConfigBarWrapper{
                
                width: 60%;
            }
            span {
                align-items: end !important;
                width: 100% !important;
            }
        }
    }
`