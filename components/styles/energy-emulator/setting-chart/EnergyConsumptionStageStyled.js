import styled from "styled-components";

export const EnergyConsumptionStageStyled = styled.div`
    border: 1px solid ${(props) => props.locked ? '#ee4a26' : '#514b4d'};
    border-radius: 1rem;
    padding: 3.2rem 0;
    position: relative;
    background: #2e2c2c;


    .btnDelete {
        top: .5rem;
        right: .5rem;
    }

    .gap-30 {
        gap: 3rem;
    }

    .inputStage {
        height: 3.2rem;
        margin-top: 2rem;
        padding-bottom: 1.2rem;
        padding-left: 0;
        border-bottom: .2rem solid #fff;

        @media screen and (max-width: 767.95px) {
            margin-top: 3rem;
        }
    }

    .iconDropDown {
        @media screen and (max-width: 600px) {
            padding-left: .2rem;
            svg {
           
                width: 1.8rem;

            }

        }
    }
`