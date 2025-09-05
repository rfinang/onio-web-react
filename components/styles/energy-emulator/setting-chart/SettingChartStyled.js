import styled from "styled-components";

export const SettingChartStyled = styled.div`
    display: flex;
    gap: 6.5rem;
    flex-direction: column;
    .text-48 {
        font-size: 4.8rem;
        line-height: 5.6rem;
        
        @media screen and (max-width: 768px){
            font-size: 4rem;
            line-height: 5rem;
        }
    }

    @media screen and (max-width: 1200.97px){

        gap: 3rem;
    }
    
    .bg-orange{
        background-color: var(--onio-color-accent);
    }

    .text-56{
        font-size: 5.6rem;
        line-height: 5rem;

        @media screen and (max-width: 768px){
            font-size: 5rem;
            line-height: 6rem;
        }
    }

    .gap-24{
        gap: 2.4rem;
        @media screen and (max-width: 1024px) {
            gap: 1rem;
        }
    }

    .text-alert {
        color: #ee4a26;
        /*@media screen and (max-width: 1200px) {
            width: 70%;
        }*/

        @media screen and (max-width: 1023.98px) {
            width: 100%;
        }
       
    }
    
    .text-successful{
        color: var(--onio-color-secondary);
        @media screen and (max-width: 1200px) {
            width: 70%;
        }

        @media screen and (max-width: 1023.98px) {
            width: 100%;
        }
    }
    
    .text-14{
        font-size: 1.4rem;
        line-height: 1.6rem;

        @media screen and (max-width: 768px){
            font-size: 1.2rem;
            line-height: 1.6rem;
        }
    }
    
    .text-18{
        font-size: 1.8rem;
        line-height: 2.3rem;

        @media screen and (max-width: 768px){
            font-size: 1.4rem;
            line-height: 2rem;
        }
    }

    .text-18-nrs{
        font-size: 1.8rem;
        line-height: 2.3rem;
    }
    
    .text-20{
        font-size: 2rem;
        line-height: 2.6rem;

        @media screen and (max-width: 768px){
            font-size: 1.6rem;
            line-height: 2.4rem;
        }
    }
    
    .text-35{
        font-size: 3.5rem;
        line-height: 3.5rem;

        @media screen and (max-width: 768px){
            font-size: 2rem;
            line-height: 3.8rem;
        }
    }
    
    .ml-144{
        margin-left: 14.4rem;
        @media screen and (max-width: 1200px) {
            margin-left: 0;
        }
        
    }
    
    .gap-144{
        gap: 14.4rem;
    }

    .containerRadio {
        display: flex;
        align-items: center;
        position: relative;
        padding-left: 4.6rem;
        height: 2.4rem;
        /*margin-bottom: 1.2rem;*/
        cursor: pointer;
        font-size: 1.6rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default radio button */
    .containerRadio input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: .2rem;
        left: 0;
        height: 2.4rem;
        width: 2.4rem;
        background-color: transparent;
        border-radius: 50%;
        border: .2rem solid var(--onio-color-muted);
        
        &.checkmark-dark{
            border: .2rem solid var(--onio-color-primary);
        }
    }
    
    .mb-64{
        margin-bottom: 6.4rem;

        @media screen and (max-width: 1023.97px) {
            margin-bottom: 3rem;
        }
    }

    /* On mouse-over, add a grey background color */
    .containerRadio:hover input ~ .checkmark {
        background-color: transparent;
    }

    /* When the radio button is checked, add a blue background */
    .containerRadio input:checked ~ .checkmark {
        background-color: transparent;
        border: .2rem solid var(--onio-color-white);
        
        &.checkmark-dark{
            border: .2rem solid var(--onio-color-primary);
        }
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .containerRadio input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .containerRadio {
        .checkmark:after{
            top: .5rem;
            left: .5rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: var(--onio-color-white);
        }
        .checkmark.checkmark-dark:after{
            top: .5rem;
            left: .5rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background: var(--onio-color-primary);
        }
    }

`;