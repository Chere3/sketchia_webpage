import Head from "next/head";
import { AnalyticsScript } from "../";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/interface/Global.module.css";
import { Poppins } from "@next/font/google";
import title from "../../styles/Info/Title.module.css";

const poppins = Poppins({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
    variable: "--poppins",
    preload: true,
    fallback: ["Helvetica"],
});

function about() {
    return (
        <div>
            <Head>
            <title>Acerca de nosotros</title>
        </Head>
        
        <AnalyticsScript />

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

        <main className={title.trademark_logo}>
            <div className={title.trademark_logo__container}>
                <div className={title.trademark_logo__container__logo}>
                    <Image src="/sketchia.svg" alt="Logo" width={200} height={50} className={title.trademark_logo__container__logo__image} />
                </div>
                <div className={title.trademark_logo__container__trademark}>
                    <p className={title.trademark_logo__container__trademark__text}>Sketchia</p>
                </div>
            </div>
        </main>

        <main>
            <div className={styles.globalFooter}>
                <div className={styles.globalFooter__container}>
                    <div className={styles.globalFooter__container__logo}>
                        <Image src="/sketchia.svg" alt="Logo" width={200} height={50} className={styles.globalFooter__logo} />
                    </div>
                    <div className={poppins.className}>
                    <div className={styles.globalFooter__container__links}>
                        <Link href="/blog" className={styles.globalFooter__container__links__link}>Blog</Link>
                        <Link href="/info/about" className={styles.globalFooter__container__links__link}>Acerca de nosotros</Link>
                        <Link href="/auth" className={styles.globalFooter__container__links__link}>Iniciar sesión</Link>
                        <Link href="/courses" className={styles.globalFooter__container__links__link}>Cursos</Link>
                        <Link href="/info/contact" className={styles.globalFooter__container__links__link}>Contacto</Link>
                        <Link href="/legal/privacy" className={styles.globalFooter__container__links__link}>Política de privacidad</Link>
                        <Link href="/legal/terms" className={styles.globalFooter__container__links__link}>Términos y condiciones</Link>
                        <Link href="/legal/cookies" className={styles.globalFooter__container__links__link}>Política de cookies</Link>
                    </div>
                    </div>
                    </div>
            </div>
        </main>
        </div>
    )
}

export default about;