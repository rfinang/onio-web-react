export const PageLink = `
.pageLink {
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 0.5rem 0;
}
@media (min-width: 1200px) {
  .pageLink {
    font-size: 2rem;
    line-height: 2.4rem;
  }
}
@media (max-width: 1023.98px) {
  .pageLink {
    font-size: 1.5rem;
  }
}
.pageLink--white {
  color: #ffffff !important;
}
.pageLink--black {
  color: #222021 !important;
}
.pageLink--black .pageLink__text:after {
  border-color: #222021 !important;
}
.pageLink--black svg path {
  stroke: #222021 !important;
}
.pageLink--reverse .pageLink__icon {
  order: 0;
  transform: rotate(180deg);
  margin-right: 0.65em;
}
.pageLink--reverse .pageLink__text {
  order: 1;
  margin-right: 0;
}
.pageLink--reverse .pageLink__text:after {
  left: auto !important;
  right: 0;
}
.pageLink__text {
  position: relative;
  display: inline-block;
  margin-right: 0.65em;
}
.pageLink__text:after {
  content: "";
  display: block;
  width: 0;
  position: absolute;
  bottom: -2px;
  left: 0;
  transition: width 0.4s cubic-bezier(0.33, 1, 0.68, 1);
}
@media (min-width: 1200px) {
  .pageLink__text:after {
    border-bottom: 2px solid #ffffff;
  }
}
@media (max-width: 1023.98px) {
  .pageLink__text:after {
    border-bottom: 1.5px solid #ffffff;
  }
}
.pageLink__icon {
  display: inline-block;
  transition: transform 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}
.pageLink__icon svg {
  width: 1.55em;
  height: auto;
}
@media (any-hover: hover) {
  .pageLink:hover .pageLink__text:after {
    width: 100%;
  }
  .pageLink:hover .pageLink__icon {
    transform: translateX(5px);
  }
  .pageLink:hover.pageLink--reverse .pageLink__icon {
    transform: translateX(-5px) rotate(180deg);
  }
}
}`;
