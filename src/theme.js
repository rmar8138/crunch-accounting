const textBaseSize = 16;
const textBaseScale = 1.2;
const spaceUnit = 16;

const theme = {
  color: {
    black: "#000220",
    white: "#FFFFFF",
    lightGrey1: "#F8F8F9",
    lightGrey2: "#E2E2E2",
    darkGrey1: "#989AA5",
    darkGrey2: "#B1B2BB",
    blue: "#06198B",
    orange: "#FE7C01"
  },
  fontSize: {
    xs: `${textBaseSize / (textBaseScale * textBaseScale)}px`,
    sm: `${textBaseSize / textBaseScale}px`,
    md: `${textBaseSize * textBaseScale}px`,
    lg: `${textBaseSize * (textBaseScale * textBaseScale)}px`
  },
  spacing: {
    xs: `${0.5 * spaceUnit}px`,
    sm: `${0.75 * spaceUnit}px`,
    md: `${1.25 * spaceUnit}px`,
    lg: `${2 * spaceUnit}px`
  }
};

export default theme;
