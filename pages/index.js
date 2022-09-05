import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import RegisterUser from "../components/register";
import { Body } from "../universalComponents/Body";
import { withTheme } from "styled-components";

function Home({ theme }) {
  return (
    <Body color={theme}>
      <div className={"header"}>
        <h1>We Value Your Opinion</h1>
        <p>a minute survey...</p>
      </div>
      <RegisterUser />
    </Body>
  );
}

export default withTheme(Home);
