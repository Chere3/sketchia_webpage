import Head from "next/head";
import { AnalyticsScript } from "../";

export default function about() {
    return (
        <div>
            <Head>
            <title>Acerca de nosotros</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}