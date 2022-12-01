import { Poppins } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AnalyticsScript } from "..";
import styles from "../../styles/interface/Global.module.css";
import courseStyles from "../../styles/courses/Course.module.css";

const poppins = Poppins({
    preload: true,
    style: "normal",
    weight: "800",
    subsets: ["latin"],
    variable: "--poppins",
    fallback: ["Helvetica"]
});


function agotado() {
    return (
        <main>
            <AnalyticsScript />
                <Head>
                    <title>Perdón</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.globalHeader}>
            <div className={styles.globalHeader__container__logo}>
                <Link href="/" className={styles.globalHeader__link}>
                <Image src="/sketchia.svg" alt="Logo" width={200} height={50} className={styles.globalHeader__logo} />
                </Link>
            </div>
            <div className={poppins.className}>
            <div className={styles.globalHeader__container__links}>
                <a href="/courses" className={styles.globalHeader__container__links__link}>Cursos</a>
                <a href="/info/about" className={styles.globalHeader__container__links__link}>Acerca de nosotros</a>
                <a href="/auth/login" className={styles.globalHeader__container__links__link}>Iniciar sesión</a>
                </div>
            </div>
        </main>
        <div className={courseStyles.globalHeader__container__title}>
            <Image src="/images/items/R.png" height={300} width={300} alt="Perro" className={courseStyles.perro}/>
            <h1 className={`${courseStyles.title__container__title__h1} ${poppins.className}`}>¡Lo sentimos!</h1>
            <h2 className={`${courseStyles.title__container__title__h2} ${poppins.className}`}>Recibimos tantas solicitudes para unirse a este curso que tuvimos que agotar existencias, intenta de nuevo en algunos días.</h2>
        </div>
        </main>
    )
}

export default agotado;