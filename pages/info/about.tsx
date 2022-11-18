import Head from "next/head";
import { AnalyticsScript } from "../";

function about() {
    return (
        <div>
            <Head>
            <title>Acerca de nosotros</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}

export default about;