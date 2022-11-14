import localFont from "@next/font/local";
import Head from "next/head";
import headerStyles from "../styles/home/header.module.css";
import Script from "next/script";
import Styles from "../styles/404/404.module.css";
import Link from "next/link";
import { Poppins } from "@next/font/google";

const extrafett = localFont({
    src: '../public/fonts/sohne-extrafett-webfont.woff2',
    variable: '--extrafett',
    style: 'normal',
    preload: true,
});

const poppins = Poppins({
    variable: "--dm_sans",
    preload: true,
    weight: "600",
    style: "normal",
    subsets: ["latin"],
  });


export default function Custom404() {
    return (
    <div>
       <Head>
        <title>No encontrado.</title>
        <meta name="description" content="Contenido no encontrado" />
       </Head>

       <main className={headerStyles.header}>
       <Script
          id="a"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ehcxoxhdt0");`,
          }}
        />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WB48WCP5H0"
          onLoad={() => {
            // @ts-ignore
            window.dataLayer = window.dataLayer || [];
            // @ts-ignore
            function gtag() {
              // @ts-ignore
              dataLayer.push(arguments);
            }
            // @ts-ignore
            gtag("js", new Date());

            // @ts-ignore
            gtag("config", "G-WB48WCP5H0");
          }}
        ></Script>
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


