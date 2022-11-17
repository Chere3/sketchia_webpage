import Head from "next/head";
import { AnalyticsScript } from ".";
import styles from "../styles/interface/Global.module.css";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import titleStyles from "../styles/courses/Title.module.css"
import localFont from "@next/font/local";
import coursesCarrouselStyles from "../styles/courses/Courses.module.css";

const poppins = Poppins({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
    variable: "--poppins",
    preload: true,
    fallback: ["Helvetica"],
});

const extrafett = localFont({
    src: "../public/fonts/sohne-extrafett-webfont.woff2",
    variable: "--extrafett",
    style: "normal",
    preload: true,
  });



export default function courses() {
    return (
        <div>
            <Head>
            <title>Cursos</title>
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
                <a href="#" className={styles.globalHeader__container__links__link}>Blog</a>
                <a href="#" className={styles.globalHeader__container__links__link}>Acerca de nosotros</a>
                <a href="#" className={styles.globalHeader__container__links__link}>Iniciar sesión</a>
                </div>
            </div>
        </main>
        <main className={titleStyles.coursesTitle}>
            <div className={titleStyles.coursesTitle__background}>
                <div className={titleStyles.coursesTitle__background__container}>
                    <div className={extrafett.className}>
                    <h1 className={titleStyles.coursesTitle__background__container__title}>Cursos</h1>
                    </div>
                    <div className={poppins.className}>
                    <p className={titleStyles.coursesTitle__background__container__description}>Actualmente nos enfocamos en brindar la mejor calidad de cursos,<br/>es por eso que queremos brindarte la experiencia más personalizada posible.</p>
                    </div>
                    </div>
            </div>
        </main>

        <main className={coursesCarrouselStyles.coursesCarrousel}>
            <div className={coursesCarrouselStyles.coursesCarrousel__container}>
                <div className={coursesCarrouselStyles.coursesCarrousel__container__card}>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__image}>
                        <Image src="/sketchia.svg" alt="Logo" width={200} height={50} className={coursesCarrouselStyles.coursesCarrousel__container__card__image__logo} />
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__title}>
                        <h1 className={coursesCarrouselStyles.coursesCarrousel__container__card__title__text}>Curso de diseño</h1>
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__description}>
                        <p className={coursesCarrouselStyles.coursesCarrousel__container__card__description__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nunc aliquet nisl, quis aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nunc aliquet nisl, quis aliquam nisl nisl sit amet nisl.</p>
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__button}>
                        <button className={coursesCarrouselStyles.coursesCarrousel__container__card__button__text}>Ver curso</button>
                    </div>
                </div>
                <div className={coursesCarrouselStyles.coursesCarrousel__container__card}>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__image}>
                        <Image src="/sketchia.svg" alt="Logo" width={200} height={50} className={coursesCarrouselStyles.coursesCarrousel__container__card__image__logo} />
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__title}>
                        <h1 className={coursesCarrouselStyles.coursesCarrousel__container__card__title__text}>Curso de diseño</h1>
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__description}>
                        <p className={coursesCarrouselStyles.coursesCarrousel__container__card__description__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nunc aliquet nisl, quis aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nunc aliquet nisl, quis aliquam nisl nisl sit amet nisl.</p>
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__button}>
                        <button className={coursesCarrouselStyles.coursesCarrousel__container__card__button__text}>Ver curso</button>
                    </div>
                </div>
                <div className={coursesCarrouselStyles.coursesCarrousel__container__card}>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__image}>
                        <Image src="/sketchia.svg" alt="Logo" width={200} height={50} className={coursesCarrouselStyles.coursesCarrousel__container__card__image__logo} />
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__title}>
                        <h1 className={coursesCarrouselStyles.coursesCarrousel__container__card__title__text}>Curso de diseño</h1>
                    </div>
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
                        <Link href="#" className={styles.globalFooter__container__links__link}>Blog</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Acerca de nosotros</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Iniciar sesión</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Cursos</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Contacto</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Política de privacidad</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Términos y condiciones</Link>
                        <Link href="#" className={styles.globalFooter__container__links__link}>Política de cookies</Link>
                    </div>
                    </div>
                    </div>
            </div>
        </main>
        </div>
    )
}