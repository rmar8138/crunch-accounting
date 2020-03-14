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
    xs: textBaseSize / (textBaseScale * textBaseScale),
    sm: textBaseSize / textBaseScale,
    md: textBaseSize * textBaseScale,
    lg: textBaseSize * (textBaseScale * textBaseScale)
  },
  spacing: {
    xs: 0.5 * spaceUnit,
    sm: 0.75 * spaceUnit,
    md: 1.25 * spaceUnit,
    lg: 2 * spaceUnit
  }
};

export default theme;
