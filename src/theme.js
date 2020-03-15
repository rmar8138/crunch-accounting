const textBaseSize = 16;
const textBaseScale = 1.2;
const spaceUnit = 16;

const theme = {
  color: {
    black: "#000220",
    white: "#FFFFFF",
    lightGrey1: "#F8F8F9",
    lightGrey2: "#E2E2E2",
    darkGrey1: "#B1B2BB",
    darkGrey2: "#989AA5",
    blue: "#06198B",
    orange: "#FE7C01",
    green: "#68E3A6",
    red: "#FF637C"
  },
  fontSize: {
    xs: `${textBaseSize / (textBaseScale * textBaseScale)}px`,
    sm: `${textBaseSize / textBaseScale}px`,
    md: `${textBaseSize * textBaseScale}px`,
    lg: `${textBaseSize * (textBaseScale * textBaseScale)}px`
  },
  spacing: {
    xxs: `${0.25 * spaceUnit}px`,
    xs: `${0.5 * spaceUnit}px`,
    sm: `${0.75 * spaceUnit}px`,
    md: `${1.25 * spaceUnit}px`,
    lg: `${2 * spaceUnit}px`,
    xl: `${3.25 * spaceUnit}px`,
    xxl: `${8.75 * spaceUnit}px`
  },
  breakpoint: {
    sm: "535px",
    md: "820px"
  }
};

export default theme;
