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
export default function Home({ theme }) {
  return (
    <Body className={"header"} color={theme}>
      <h1>We Value Your Opinion</h1>
      <RegisterUser />
    </Body>
  );
}
