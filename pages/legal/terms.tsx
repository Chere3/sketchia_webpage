import Head from "next/head";
import { AnalyticsScript } from "../";

function legal_terms() {
    return (
        <div>
            <Head>
            <title>Términos y condiciones</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}

export default legal_terms;