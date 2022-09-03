import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";
export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${theme.color.companyBackground};
    text-align: center;
};
.logo{
    width:30%;
    margin: 1rem auto;
}
`;
