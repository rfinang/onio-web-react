import styled from "styled-components";

export const PowerSolverCalculatorStyled = styled.div`
    .box{
        min-height: 21.6rem;
        min-width: 45.6rem;
        padding: 1.2rem 1.8rem 2.4rem 1.8rem;
        border: .2rem solid #ff6231;
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 69.5rem;
        
        &.boxCalculator{
            min-width: 70rem;
            @media screen and (max-width: 1279.97px){
                min-width: unset;
            }
        }
        @media screen and (max-width: 1439.95px){
            max-width: unset;
        }

        @media screen and (max-width: 1201.95px){
            width: 100% !important;
            min-height: unset;
            gap: .8rem;
            padding: 1.2rem 1.8rem 1.2rem 1.8rem;
        }
        

       
    }
    
    @media screen and (max-width: 1279.95px){
        min-width: unset;
        
    }
    
   

    @media screen and (max-width: 768.95px){
        .box{
            min-width: unset;
        }

        .boxValue{
            width: 100% !important;
        }
        
        
    }
    
    .calculatorReceive{
        @media screen and (max-width: 468.97px){
            flex-direction: column; 
            align-items: start;
            div{
                width: 100%;
            }
        }
    }
    
    .gap-10{
        gap: 1rem;
    }

    .text-orange{
        color: #ff6231;
    }
    
    .text-red-bold{
        color: #dc2626;
    }
    
`