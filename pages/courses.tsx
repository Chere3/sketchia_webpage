import Head from "next/head";
import { AnalyticsScript } from ".";
import styles from "../styles/interface/Global.module.css";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import titleStyles from "../styles/courses/Title.module.css"
import localFont from "@next/font/local";
import coursesCarrouselStyles from "../styles/courses/Courses.module.css";
import Router from "next/router";

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

function CourseCard(href?: string, title?: string, description?: string, image?: string) {
    return (
        <div className={coursesCarrouselStyles.coursesCarrousel__container__card} onClick={(e) => {
            // @ts-ignore
            Router.push(e.target.id)
        }}>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__image}>
                        <Image src="/images/not_image_image.png" alt="Logo" width={290} height={168} className={coursesCarrouselStyles.coursesCarrousel__container__card__image__logo} />
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__title}>
                        <h1 className={coursesCarrouselStyles.coursesCarrousel__container__card__title__text}>Curso #1</h1>
                    </div>
                    <div className={coursesCarrouselStyles.coursesCarrousel__container__card__description}>
                        <p className={coursesCarrouselStyles.coursesCarrousel__container__card__description__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nunc aliquet nisl, quis aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nunc aliquet nisl, quis aliquam nisl nisl sit amet nisl.</p>
                    </div>
                </div>
    )
}

function CoursesCarrousel() {
    return (
        <div className={poppins.className}>
        <main className={coursesCarrouselStyles.coursesCarrousel}>
            <div className={coursesCarrouselStyles.coursesCarrousel__container}>
                {CourseCard()}
                {CourseCard()}
                {CourseCard()}
                {CourseCard()}
                {CourseCard()}
                    </div>
                    </main>
                    </div>
    )
}

async function getCoursesData() {
    const res = await fetch(`https://api.sketchia.com.mx/v0/courses`);
    const data = (await res.json()).courses;

    const firstContainer = document.getElementsByClassName("Courses_coursesCarrousel__container__zcwxp");

    const array = [];

    for (let i = 0; i < firstContainer.length; i++) {
        array.push(firstContainer[i]);
    }

    
    const arrayOfChildren = [];

    for (let i = 0; i < array.length; i++) {
        arrayOfChildren.push(array[i].children);
    }
    // assign the href course id to the link

    var a = 0;

    for (let i = 0; i < arrayOfChildren.length; i++) {
        for (let j = 0; j < arrayOfChildren[i].length; j++) {
            // @ts-ignore
            firstContainer.item(i).children[j].children[1].innerHTML = data[a].data.titulo;
            // @ts-ignore
            firstContainer.item(i).children[j].children[2].innerHTML = data[a].data.description;
            // @ts-ignore
            firstContainer.item(i).children[j].children[0].children[0].srcset = data[a].data.imagen ?? "/images/not_image_image.png";
            // @ts-ignore
            firstContainer.item(i).children[j].id = `/courses/${data[a].id}`;
            // @ts-ignore
            firstContainer.item(i).children[j].children[0].id = `/courses/${data[a].id}`;
            // @ts-ignore
            firstContainer.item(i).children[j].children[1].id = `/courses/${data[a].id}`;
            // @ts-ignore
            firstContainer.item(i).children[j].children[2].id = `/courses/${data[a].id}`;
             a++
        }
    }

    // assign the data to the elements


}


function courses() {
    getCoursesData();
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
                <a href="/blog" className={styles.globalHeader__container__links__link}>Blog</a>
                <a href="/info/about" className={styles.globalHeader__container__links__link}>Acerca de nosotros</a>
                <a href="/auth/login" className={styles.globalHeader__container__links__link}>Iniciar sesión</a>
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
        <div className={coursesCarrouselStyles.separator}>
            <br />
        </div>
        <CoursesCarrousel />
        <CoursesCarrousel />
        <CoursesCarrousel />
        <CoursesCarrousel />
        <div className={coursesCarrouselStyles.separator}>
            <br />
        </div>
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
};

export default courses;