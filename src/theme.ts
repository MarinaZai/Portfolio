import { createGlobalStyle } from "styled-components";
type propsType = {
  theme: {
    body: string;
    textColor: string;
    headingColor: string;
    cardBody: string;
    cardText: string;
    cardLink: string,
  };
};
export const darkTheme = {
  body: "#191919",
  textColor: "#D9D9D9",
  headingColor: "lightblue",
  cardBody: "#363636",
  cardText: "#CCCCCC",
  cardLink: "#FFFFFF",
};

export const lightTheme = {
  body: "#F5F5F5",
  textColor: "#42446E",
  headingColor: "#d23669",
  cardBody: "#FFFFFF",
  cardText: "#000000",
  cardLink: "#000000",
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props: propsType) => props.theme.body};
    color: ${(props: propsType) => props.theme.textColor};
    transition: .3s ease;
   }
   h2{
     color: ${(props: propsType) => props.theme.headingColor};
   }
   .ant-card {
    background: ${(props: propsType) => props.theme.cardBody}; 
   }
   .ant-card-meta-title {
    color: ${(props: propsType) => props.theme.cardText} !important; 
   }
   .ant-card-meta-description {
    color: ${(props: propsType) => props.theme.cardText} !important; 
   }
   .ant-typography {
    color: ${(props: propsType) => props.theme.cardLink} !important; 
  }
   `;
