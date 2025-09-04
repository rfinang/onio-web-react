import styled from "styled-components";

export const NavMobileStyles = styled.div`
  position: absolute;
  z-index: 1;
  top: 12.9rem;
  left: 0;
  right: 0;
  height: calc(100vh - 12.9rem);

  transform: translateX(${(props) => (props.isOpen ? "0" : "100%")});
  background-color: var(--onio-color-muted);
  transition: transform 0.4s ease;

  @media (min-width: 1024px) {
    display: none;
  }

  & > .container {
    height: 100%;
  }
  .nav-mobile__wrapper {
    padding: 9.3rem 0 5rem;

    height: 100%;
    .scrollable {
      display: flex;
      flex-direction: column;
    }
  }
  .header__navigation__menu {
    display: block;
    font-size: 3rem;
    .menu-item {
      margin-right: 0;
      &__link {
        padding: 0.6rem 0;
        border: none;
        display: block;
        background-color: transparent;
        width: 100%;
        text-align: left;
        &:after {
          content: none;
        }
      }
      &__icon {
        width: 3rem;
        height: 3rem;
        border: 0.15rem solid var(--onio-color-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        &::after,
        &::before {
          content: none;
        }
        svg {
          display: block;
          margin-left: 0.2rem;
        }
      }
      &__child {
        opacity: 1;
        -webkit-clip-path: inset(0 0 0 0);
        -webkit-clip-path: inset(0 0 0 0);
        clip-path: inset(0 0 0 0);
        visibility: visible;
        top: 0;
        bottom: 0;
        transform: translateX(100%);
        &.show {
          transform: translateX(0);
        }
        .scrollable {
          max-height: calc(100vh - 27rem);
        }
        &__title {
          min-height: auto;
          margin-bottom: 2rem;
        }
        &__menu {
          margin-bottom: 3.2rem;
        }
        &__pages {
          margin-bottom: 5.6rem;
        }
      }
      &__back {
        padding: 0;
        border: none;
        background-color: transparent;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 1.8rem;
        display: inline-flex;
        align-items: center;
        margin-bottom: 1.1rem;
        color: var(--onio-color-primary);
        svg {
          display: block;
          margin-right: 0.7rem;
        }
      }
    }
  }

  .btn-contact {
    margin-top: auto;
  }
  .socials {
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 1.7rem;
    li {
      margin-right: 1.1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .terms {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0;
    .term__item {
      margin-right: 1.7rem;
      &:last-child {
        margin-right: 0;
      }
    }
    .term__link {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 2.5rem;
      color: var(--onio-color-primary);
    }
  }
`;
