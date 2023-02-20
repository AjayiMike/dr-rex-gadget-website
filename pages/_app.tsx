import type { AppProps } from "next/app";
import {
    createGlobalStyle,
    DefaultTheme,
    ThemeProvider,
} from "styled-components";
import "pure-react-carousel/dist/react-carousel.es.css";

const theme: DefaultTheme = {
    colors: {
        bg: "rgba(255, 255, 255, 1)",
        cream: "#D9D9D9",
        white1: "#ffffff",
        white2: "#DCD8D8",
        blue1: "#05D2FF",
        blue2: "#D7F8FF",
        purple1: "#58058B",
        purple2: "#E5C7F8",
        black1: "#000000",
        black2: "#29323A",
    },
};

const GlobalStyle = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin, padding, border and outline
*/
* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  background-color: ${theme.colors.bg};
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

`;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
