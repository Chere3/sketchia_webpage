import Head from "next/head";
import { AnalyticsScript } from "../";

export default function legal_cookies() {
    return (
        <div>
            <Head>
            <title>Politíca de Cookies</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}