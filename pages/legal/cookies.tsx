import Head from "next/head";
import { AnalyticsScript } from "../";

function legal_cookies() {
    return (
        <div>
            <Head>
            <title>Politíca de Cookies</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}

export default legal_cookies;