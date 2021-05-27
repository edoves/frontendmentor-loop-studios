import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --body-font: "Alata", sans-serif;
  --heading-font:"Josefin Sans", sans-serif;
  --button-font: var(--body-font);
  /* site color */
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --dark-gray: hsl(0, 0%, 55%);
  --very-dark-grey: hsl(0, 0%, 41%);

}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {  
  font-family:var(--body-font);
}
a {
  text-decoration: none;
}

h1,h2,h3,h4,h5,h6 {
  font-family:var(--heading-font);
}
`;

export const Container = styled.div`
  width: min(130rem, 90%);
  margin: 0 auto;
`;
