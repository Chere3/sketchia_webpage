import localFont from "@next/font/local";
import Head from "next/head";
import Script from "next/script";


const extrafett = localFont({
    src: "../../public/fonts/sohne-extrafett-webfont.woff2",
    variable: "--extrafett",
    style: "normal",
    preload: true,
  });  

export default function Login() {
    return (
        <div>
            <Head>
                <title>Inicio de sesión</title>
                <meta name="description" content="Iniciar sesión" />
            </Head>
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

                <div className={extrafett.className}>
                    </div>
        </div>
    );
}