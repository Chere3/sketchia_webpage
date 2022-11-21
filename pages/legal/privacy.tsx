import Head from "next/head";
import { AnalyticsScript } from "../";

function legal_privacy() {
    return (
        <div>
            <Head>
            <title>Términos de privacidad</title>
        </Head>
        
        <AnalyticsScript />
        </div>
    )
}

export default legal_privacy;