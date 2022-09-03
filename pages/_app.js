import { GlobalStyles } from "../lib/globalStyles";
import CompanyLogo from "../assets/myeverylogo.png";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <div className="logo">
        <Image src={CompanyLogo} />
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
