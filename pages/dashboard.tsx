import localFont from "@next/font/local";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import titleStyles from "../styles/dashboard/Title.module.css";
import dashboardStyles from "../styles/dashboard/Dashboard.module.css";
import styles from "../styles/interface/Global.module.css";
import { useAuth } from "reactfire";
import { Open_Sans, Poppins } from "@next/font/google";
import Head from "next/head";
import { AnalyticsScript } from ".";
import Link from "next/link";
import Image from "next/image";

  
const open = Open_Sans({
    preload: true,
    style: "normal",
    weight: "800",
    subsets: ["latin"],
    variable: "--open_sans",
    fallback: ["Helvetica"]
});

const poppins = Poppins({
    preload: true,
    style: "normal",
    weight: "800",
    subsets: ["latin"],
    variable: "--poppins",
    fallback: ["Helvetica"]
});

function dashboardCard(title: string, description: string, link: string) {

    const router = useRouter();

    return (
        <div className={dashboardStyles.card} onClick={(e) => {router.push(`${link}`)}}>
            <div className={dashboardStyles.cardTitle}>
                <h1>{title ?? "titulo"}</h1>
            </div>
            <div className={dashboardStyles.cardContent}>
                <p>{description ?? "description"}</p>
            </div>
        </div>
    )
}


function dash() {

    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.currentUser == null) {
            router.push("/auth/login");
        }
    }, [auth.currentUser]);

    if (auth.currentUser !== null) {
        return (
            <main className={titleStyles.dashboard}>
                <AnalyticsScript />
            <Head>
                <title>Dashboard</title>
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
                <div className={titleStyles.dashboard__title}>
                    <div className={open.className}>
                    <div className={titleStyles.dashboard__title__background}>
                    <div className={titleStyles.dashboard__title__container}>
                <h1>Bienvenid@{auth.currentUser?.displayName == null ? "." : ", " + auth.currentUser.displayName}</h1>
                </div>
                </div>
                </div>
                </div>

                <div className={dashboardStyles.dashboard__container}>
                    <div className={poppins.className}>
                    <div className={dashboardStyles.dashboard__container__title}>
                        <h3 className={dashboardStyles.dashboard__title__up}>{new Date().getHours() == 0 ? "Buenas noches" : new Date().getHours() < 12 ? "Buenos días" : new Date().getHours() < 18 ? "Buenas tardes" : "Buenas noches"}, ¿Qué es lo que desea hacer hoy?</h3>
                    <div className={dashboardStyles.dashboard__container__cards}>
                        {dashboardCard("Ver mi cuenta", "Vea todas las configuraciones de su cuenta, a la vez que administre todo lo relacionado a ella.", "/dashboard/account")}
                        {dashboardCard("Ver mis cursos", "Vea todos los cursos que ha obtenido al igual que administrelos.", "/dashboard/courses")}
                        {dashboardCard("Ver mis estadisticas", "Vea las estadisticas en base a su perfil en los ultimos meses o días, sea libre de elegir.", "/dashboard/stats")}
                        </div>
                        </div>
                        </div>
                        </div>

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
        );
    }
}

export default dash;