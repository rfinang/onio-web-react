import styled from "styled-components";

const HeaderStyles = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (max-width: 1023px) {
    padding: 5.8rem 0 2.7rem;
    height: 129px;
  }
  &.hide {
    transform: translateY(-100%);
  }
  .header__logo {
    padding-top: 2rem;
    padding-bottom: 2rem;
    img {
      max-height: 3.4rem;
    }
    @media (max-width: 1023px) {
      padding: 0 1.2rem;
      img {
        max-width: 9.7rem;
        max-height: 2.6rem;
      }
    }
  }
  .header__navigation {
    padding: 0;
    &__menu {
      list-style: none;
      padding-left: 0px;
      margin-bottom: 0;
      display: flex;
      .menu-item {
        margin-right: 5rem;
        @media (max-width: 1399px) {
          margin-right: 4.375rem;
        }
        @media (max-width: 1199px) {
          margin-right: 2rem;
        }
        &__link {
          display: block;
          padding: 4.5rem 0;
          font-weight: 500;  
          color: var(--black);
          text-decoration: none;
          position: relative;
          @media (max-width: 1399px) {
            padding: 3.9375rem 0;
          }
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            transition: transform 0.4s ease;
            transform: scaleX(0);
            height: 0.2rem;
            background-color: var(--black);
          }
          &:hover {
            &:after {
              transform: scaleX(1);
            }
            .menu-item__icon:after {
              opacity: 0;
            }
          }
        }
        &__has-sub {
          padding-right: 1.4rem;
          @media (max-width: 1399px) {
            padding-right: 11px;
          }
        }
        &__icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 1rem;
          width: 1rem;
          display: block;
          right: 0;
          &::after,
          &::before {
            content: "";
            display: block;
            position: absolute;
            background: #aeadad;
          }
          &:before {
            width: 1rem;
            height: 0.2rem;
            top: 0.4rem;
          }
          &:after {
            width: 0.2rem;
            height: 1rem;
            left: 0.4rem;
            transition: opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1);
          }
          @media (max-width: 1399px) {
            height: 7.88px;
            width: 7.88px;
            &:before {
              width: 7.88px;
              height: 1.56px;
              top: 3px;
            }
            &:after {
              height: 7.88px;
              width: 1.56px;
              left: 3px;
            }
          }
        }
        &__child {
          z-index: 99;
          padding: 5rem 0 6rem;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--grey);
          -webkit-clip-path: inset(0 0 100% 0);
          clip-path: inset(0 0 100% 0);
          visibility: hidden;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
          &__title {
            min-height: 6.5rem;
            margin-bottom: 5.6rem;
          }
          &__menu {
            list-style: none;
            padding-left: 0;
            margin-bottom: 0;
            a {
              padding: 0.125rem 0;
              display: block;
              font-size: 2rem;
            }
          }
          &__pages {
            list-style: none;
            padding-left: 0;
            margin-bottom: 0;
          }
        }
        &:hover .menu-item__child {
          opacity: 1;
          -webkit-clip-path: inset(0 0 0 0);
          clip-path: inset(0 0 0 0);
          visibility: visible;
        }
      }
    }
  }
  .btn-search {
    padding: 0;
    border: none;
    width: 35px;
    height: 35px;
    margin-left: auto;
    margin-right: 8.75px;
  }
  .header__mobile {
    &__link {
      padding: 0;
      border: none;
      width: 46px;
      height: 40px;
      padding: 11.5px 10px;
      background-color: transparent;
    }
    &__icon {
      display: block;
    }
    &__line {
      display: block;
      border-bottom: 3px solid #222021;
      margin-bottom: 0.30769rem;
      width: 2.6rem;
      margin-left: auto;
      margin-right: auto;
      transition: all 0.4s ease;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__link.active {
      .header__mobile__line {
        &:first-child {
          transform: translate(0px, 7px) rotate(45deg);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
        &:nth-child(3) {
          opacity: 0;
          transform: translate(0px, -7px);
        }
      }
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
  @media (max-width: 1023px) {
    .header__action,
    .header__navigation {
      display: none;
    }
  }
`;
export default HeaderStyles;
