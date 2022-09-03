import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
      font-family: 'Nunito', sans-serif;
      background-color: ${({ theme }) => theme.companyBackground};
      text-align: center;
    }

    .logo{
        width:30%;
        margin: 1rem auto;
    }
`;
