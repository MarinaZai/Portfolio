import { createGlobalStyle } from "styled-components";
export const darkTheme = {
  body: "#191919",
  textColor: "#D9D9D9",
  headingColor: "lightblue",
};

export const lightTheme = {
  body: "#F5F5F5",
  textColor: "#42446E",
  headingColor: "#d23669",
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props:any) => props.theme.body};
    color: ${(props:any) => props.theme.textColor};
    transition: .3s ease;
   }
   h2{
     color: ${(props:any) => props.theme.headingColor};
   }`;
