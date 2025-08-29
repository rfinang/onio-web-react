export const AnimationStyles = `
.animation--chars {
  &.is-clone {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  &.is-mask_bottom {
    .word {
      display: inline-block;
    }
  }

  .word {
    white-space: nowrap;
    line-height: 1.15;
  }

  &--2d {
    line-height: 75%;
    letter-spacing: -.005em;
    .word {
      display: inline-block;
    }
  }

  &--3d {
    line-height: 75%;
    letter-spacing: -.005em;
    .word {
      display: inline-block;
    }
  }

  .char {
    display: inline-block;

    .char--element {
      display: inline-block;
    }
  }

  &:not(.is-animation-completed) {

    &.animation--chars--3d {
      .word {
        perspective: 300px;
        overflow: hidden;
      }
    }

    &.animation--chars--2d {
      .word {
        overflow: hidden;
      }
    }

    &.is-mask_bottom {
      .word {
        overflow: hidden;
      }
    }

    .char--element {
      will-change: transform;
    }

    .char {
      &.char--parent {
        overflow: hidden;
      }

      &:not(.char--parent) {
        transform-origin: center top;
        will-change: transform;
      }
    }
  }
}
.animation--image {
  &:not(.is-animation-completed) {
    will-change: transform, opacity;
  }
}
.animation--lines {
  .word {
    display: inline-block;
  }

  &:not(.is-animation-completed) {
    &.lines_mask--bottom {
      overflow: hidden;
    }

    .word {
      will-change: transform, opacity;
    }
  }
}
.js-animation--mask {
  &:not(.is-animation-completed) {
    overflow: hidden;
  }
}
.js-animation--scale {
  &:not(.is-animation-completed) {
    will-change: transform;
  }
}
`;
