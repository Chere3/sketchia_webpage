import Head from "next/head";
import { AnalyticsScript } from ".";
import styles from "../styles/interface/Global.module.css";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import titleStyles from "../styles/blog/Title.module.css"
import localFont from "@next/font/local";
import blogCarrouselStyles from "../styles/blog/Blogs.module.css";
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

function BlogCard() {
    return (
        <div className={blogCarrouselStyles.blogCarrousel__container__card}>
                    <div className={blogCarrouselStyles.blogCarrousel__container__card__image} onClick={
                        (e: any) => {
                            Router.push(`/blog/${e.target.id}`)
                        }
                    }>
                        <Image src="/images/not_image_image.png" alt="Logo" width={450} height={302} className={blogCarrouselStyles.blogCarrousel__container__card__image__logo} />
                        <div className={blogCarrouselStyles.blogCarrousel__container__card__text}>
                    <div className={blogCarrouselStyles.blogCarrousel__container__card__title}>
                        <h1 className={blogCarrouselStyles.blogCarrousel__container__card__title__text}>Blog #1</h1>
                    </div>
                    <div className={blogCarrouselStyles.blogCarrousel__container__card__description}>
                        <p className={blogCarrouselStyles.blogCarrousel__container__card__description__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    </div>
                    </div>
                    
                </div>
    )
}

function BlogCarrousel() {
    return (
        <div className={poppins.className}>
        <main className={blogCarrouselStyles.blogCarrousel}>
            <div className={blogCarrouselStyles.blogCarrousel__container}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                    </div>
                    </main>
                    </div>
    )
}

async function getBlogsData() {
    const res = await fetch('https://api.sketchia.com.mx/v0/blogs')
    const data = (await res.json()).blogs

    const container = document.getElementsByClassName("Blogs_blogCarrousel__container__cPlTV");
    const cards = container[0].children;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const image = card.children[0].children[0];
        const title = card.children[0].children[1].children[0].children[0];
        const description = card.children[0].children[1].children[1].children[0];

        // @ts-ignore
        image.srcset = data[i]?.data?.image ?? "/images/not_image_image.png";
        title.innerHTML = data[i]?.data?.title ?? "No obtenido debido a un error."
        description.innerHTML = data[i]?.data?.description ?? "No obtenido debido a un error."
        image.id = data[i]?.id ?? "No obtenido debido a un error."
        card.id = data[i]?.id ?? "No obtenido debido a un error."
        title.id = data[i]?.id ?? "No obtenido debido a un error."
        description.id = data[i]?.id ?? "No obtenido debido a un error."
    }
}


function courses() {
    getBlogsData();
    return (
        <div>
            <Head>
            <title>Blogs</title>
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
        <main className={titleStyles.blogTitle}>
            <div className={titleStyles.blogTitle__background}>
                <div className={titleStyles.blogTitle__background__container}>
                    <div className={extrafett.className}>
                    <h1 className={titleStyles.blogTitle__background__container__title}>Blog's</h1>
                    </div>
                    <div className={poppins.className}>
                    <p className={titleStyles.blogTitle__background__container__description}>Lee todos los textos hechos por profesionales de sketchia, para todos<br/>para aprender de forma visual y gratuitamente.</p>
                    </div>
                    </div>
            </div>
        </main>
        <div className={blogCarrouselStyles.separator}>
            <br />
        </div>
        <BlogCarrousel />
        <div className={blogCarrouselStyles.separator}>
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