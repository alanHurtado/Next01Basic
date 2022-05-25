import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui";

interface Props {
  children?: React.ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title = "pokenon" }) => {
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta name="author" content="Alan Astorga" />
        <meta name="descripcion" content="Información sobre el pokermo" />
        <meta name="keyworks" content="XXX, pokemon, pokedex" />
      </Head>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
