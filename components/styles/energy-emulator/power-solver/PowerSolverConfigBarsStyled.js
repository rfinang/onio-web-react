import styled from "styled-components";

export const PowerSolverConfigBarsStyled = styled.div`
    .divider {
        min-height: 46.8rem;
        width: .05rem;
        background: rgba(174, 173, 173, .5);
        opacity: 0.5;

        @media screen and (max-width: 1023.93px) {
            margin-bottom: 2rem;
            &.odd-divider{
                display: none;
            }
        }
    }

    .powerConfigBarItemContainer {
        @media screen and (max-width: 1023.96px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }

    }

    .disabledOverlay {
        position: relative;
    }

    .disabledOverlay:before {
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(245, 245, 245, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 21;
    }


    @media screen and (max-width: 1023.93px) {
        .powerConfigBarContainer {
            flex-wrap: wrap;
        }

        .powerConfigBarItem {
            width: 48%;
            padding-bottom: 2rem;
        }
    }

    @media screen and (max-width: 486.97px) {
        //.powerConfigBarItem{
        //    width: 100%;
        //}
        .powerConfigBarContainer {
            flex-wrap: wrap;
        }

    }

`