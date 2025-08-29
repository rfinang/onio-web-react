import styled from "styled-components";

export const NavNewsItem = styled.a`
  background-color: var(--black);
  color: var(--grey);
  display: block;
  max-width: 21.6rem;
  padding: 1.1rem 1.4rem 1.7rem;
  min-height: 21.6rem;
  display: flex;
  flex-direction: column;
  transition: background-color .4s cubic-bezier(.33,1,.68,1);
  @media (max-width: 767px) {
    max-width: 100%;
  }
  .news-nav__desc {
    color: var(--grey);
    transition: color 0.4s ease;
  }
  .news-nav__icon {
    margin-top: auto;
    width: 3.394rem;
    height: 3.394rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid var(--grey);
    border-radius: 50%;
    transition: border-color 0.4s ease, background-color 0.4s ease;
    background-color: var(--black);
    svg {
      margin-left: 0.2rem;
      display: block;
      path {
        transition: stroke 0.4s ease;

      }
    }
  }
  &:hover {
    
    background-color: #ffff;
    text-decoration: none;
    .news-nav__desc {
      color: var(--black);
    }
    .news-nav__icon {
      border-color: var(--black);
      background-color: var(--black);
      svg path {
        stroke: #fff;
      }
    }
  }
`;