import Head from "next/head";
import { AnalyticsScript } from ".";
import styles from "../styles/interface/Global.module.css";

export default function courses() {
    return (
        <div>
            <Head>
            <title>Cursos</title>
        </Head>

        <AnalyticsScript />
        <div className={styles.globalHeader}>
        </div>
        </div>
    )
}