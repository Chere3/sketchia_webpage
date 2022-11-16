import Head from "next/head";
import { AnalyticsScript } from ".";

export default function blog() {
    return (
        <div>
            <Head>
            <title>Blog</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}