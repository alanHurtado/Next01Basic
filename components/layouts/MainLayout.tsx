import styles from "./MainLayout.module.css";
import Head from "next/head";
import { NavBar } from "../NavBar";
import { DetailedHTMLProps, HTMLAttributes } from "react";
interface Props {
  children: any;
}
export const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Primer Página en Next</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
