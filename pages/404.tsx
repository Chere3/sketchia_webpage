import localFont from "@next/font/local";
import Head from "next/head";
import headerStyles from "../styles/home/header.module.css";
import Styles from "../styles/404/404.module.css";
import Link from "next/link";
import { Poppins } from "@next/font/google";
import { AnalyticsScript } from ".";

const extrafett = localFont({
  src:  '../public/fonts/sohne-extrafett-webfont.woff2',
  variable: "--extrafett",
  style: "normal",
  preload: true,
});

const poppins = Poppins({
  variable: "--dm_sans",
  preload: true,
  weight: "600",
  style: "normal",
  subsets: ["latin"],
});

function Custom404() {
  return (
    <div>
      <Head>
        <title>No encontrado.</title>
        <meta name="description" content="Contenido no encontrado" />
      </Head>

      <AnalyticsScript />
      <main className={headerStyles.header}>
      </main>

      <main className={Styles.main}>
        <div className={extrafett.className}>
          <h1 className={Styles.main__title}>404</h1>
        </div>
        <div className={poppins.className}>
          <h5>Al parecer lo que estas buscando no lo hemos encontrado.</h5>
          <Link href="/" className={Styles.main__button}>
            Volver a la página de inicio.
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Custom404;
