export const IconLink = `
.iconLink {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);
}
@media (min-width: 1200px) {
  .iconLink {
    border: 2px solid;
  }
}
@media (max-width: 1199.98px) {
  .iconLink {
    border: 1.5px solid;
  }
}
.iconLink svg path {
  transition: stroke 0.4s cubic-bezier(0.33, 1, 0.68, 1);
}
@media (min-width: 1200px) {
  .iconLink--download--small {
    width: 3rem;
    height: 3.8rem;
  }
}
@media (min-width: 740px) and (max-width: 1199.98px) {
  .iconLink--download--small {
    width: 2rem;
    height: 2.5384615385rem;
  }
}
@media (max-width: 739.98px) {
  .iconLink--download--small {
    width: 22px;
    height: 28px;
  }
}
.iconLink--download--small svg {
  position: relative;
  top: 0.05em;
}
@media (min-width: 740px) and (max-width: 1023.98px) {
  .iconLink--download--small svg {
    width: 1.3076923077rem;
    height: auto;
  }
}
@media (max-width: 739.98px) {
  .iconLink--download--small svg {
    width: 15px;
  }
}
.iconLink--download--red {
  border-color: var(--onio-color-accent) !important;
}
.iconLink--download--red svg path {
  stroke: var(--onio-color-accent);
}
.iconLink--download--silver {
  border-color: var(--onio-color-muted) !important;
}
.iconLink--download--silver svg path {
  stroke: var(--onio-color-muted);
}
@media (min-width: 1200px) {
  .iconLink--arrow--small {
    height: 3.5rem;
    width: 3.5rem;
  }
}
@media (min-width: 740px) and (max-width: 1199.98px) {
  .iconLink--arrow--small {
    width: 2.5384615385rem;
    height: 2.5384615385rem;
  }
}
@media (max-width: 739.98px) {
  .iconLink--arrow--small {
    width: 26px;
    height: 26px;
  }
}
.iconLink--arrow--small svg {
  position: relative;
  left: -0.15em;
}
@media (min-width: 740px) and (max-width: 1023.98px) {
  .iconLink--arrow--small svg {
    width: 1.3846153846rem;
    height: auto;
  }
}
@media (max-width: 739.98px) {
  .iconLink--arrow--small svg {
    width: 15px;
  }
}
@media (min-width: 1200px) {
  .iconLink--arrow--large {
    height: 4.6rem;
    width: 4.6rem;
  }
}
@media (max-width: 1399.98px) {
  .iconLink--arrow--large {
    height: 40.25px;
    width: 40.25px;
  }
}
@media (max-width: 1199.98px) {
  .iconLink--arrow--large {
    height: 3rem;
    width: 3rem;
  }
}
.iconLink--arrow--large svg {
  position: relative;
  left: 0.1em;
}
@media (min-width: 740px) and (max-width: 1199.98px) {
  .iconLink--arrow--large svg {
    width: 1.1rem;
    height: auto;
  }
}
@media (max-width: 739.98px) {
  .iconLink--arrow--large svg {
    width: 10px;
  }
}
.iconLink--arrow--oval {
  border-radius: 50%;
}
.iconLink--arrow--silver {
  border-color: var(--onio-color-muted) !important;
}
.iconLink--arrow--silver svg path {
  stroke: var(--onio-color-muted);
}
.iconLink--arrow--white {
  border-color: var(--onio-color-white) !important;
}
.iconLink--arrow--white svg path {
  stroke: var(--onio-color-white);
}
.iconLink--arrow--black {
  border-color: var(--onio-color-primary) !important;
}
.iconLink--arrow--black svg path {
  stroke: var(--onio-color-primary);
}
.iconLink--arrow--red {
  border-color: var(--onio-color-accent) !important;
}
.iconLink--arrow--red svg path {
  stroke: var(--onio-color-accent);
}
`;
