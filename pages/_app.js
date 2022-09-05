import { GlobalStyles } from "../lib/GlobalStyle";
import CompanyLogo from "../assets/myeverylogo.png";
import { theme } from "../lib/theme";
import Image from "next/image";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme.color}>
        <GlobalStyles />
        <div className="logo" style={{ paddingTop: "20px" }}>
          <Image src={CompanyLogo} alt="logo" />
        </div>

        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
