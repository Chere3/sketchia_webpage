import { useRouter } from "next/router";
import { AnalyticsScript } from "..";
import { Open_Sans, Poppins } from "@next/font/google";


import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../../styles/interface/Global.module.css";
import Link from "next/link";
import blogModule from "../../styles/blog/Blog.module.css";
import { useAuth } from "reactfire";
import Script from "next/script";
import MarkdownIt from "markdown-it";


const poppins = Poppins({
    preload: true,
    style: "normal",
    weight: "800",
    subsets: ["latin"],
    variable: "--poppins",
    fallback: ["Helvetica"]
});

const open = Open_Sans({
    preload: true,
    style: "normal",
    weight: "800",
    subsets: ["latin"],
    variable: "--open_sans",
    fallback: ["Helvetica"]
});

function course() {


    const router = useRouter()
    const { id } = router.query;

    const auth = useAuth();

    async function loadingScreen() {
        const loading = document.getElementById("loading");

        loading!.style!.display = "none";
    }

    async function getBlogData() {
        try {
        const blogData = await fetch(`https://api.sketchia.com.mx/v0/blogs/${id}`);
        const blogDataJSON = await (await blogData.json()).blog;


        const markdown = blogDataJSON?.markdown;

        const titulo = document.getElementById("titulo");
        const descripcion = document.getElementById("descripcion");

        titulo!.innerHTML = blogDataJSON?.title;
        descripcion!.innerHTML = blogDataJSON?.description;

        const md = MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            
        });

        const markdownHTML = md.render(markdown ?? "### Hola");
        
        // insert rendered HTML into DOM
        const markdownContainer = document.getElementById("markdown");
        markdownContainer!.innerHTML = markdownHTML;
    } catch (error) {
        const blogData = await fetch(`https://api.sketchia.com.mx/v0/blogs/${id}`);
        const blogDataJSON = await (await blogData.json()).blog;


        const markdown = blogDataJSON?.markdown;

        const titulo = document.getElementById("titulo");
        const descripcion = document.getElementById("descripcion");

        titulo!.innerHTML = blogDataJSON?.title;
        descripcion!.innerHTML = blogDataJSON?.description;

        const md = MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            
        });

        const markdownHTML = md.render(markdown ?? "### Hola");
        
        // insert rendered HTML into DOM
        const markdownContainer = document.getElementById("markdown");
        markdownContainer!.innerHTML = markdownHTML;
    }
    }

    async function Loadmanager() {
        await getBlogData();

        await new Promise((resolve) => setTimeout(resolve, 1000));
        await loadingScreen();
    }

    Loadmanager();
    return (
        <main>
                <AnalyticsScript />
            <Head>
                <title id="titulo_pagina">Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="loading" className={blogModule.loading}>
                <div className={`${blogModule.loading__container} ${open.className}`}>
                    <Image src="/sketchia.svg" width={400} height={100} alt={"Logo"} />
                    <h1>Cargando blog espera...</h1>
                </div>
            </div>

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
        <main className={blogModule.title__container}>
            <div className={blogModule.title__background}>
            <h1 className={`${blogModule.title__container__title} ${open.className}`} id="titulo">Blog de</h1>
            </div>
            <div className={blogModule.title__container__description}>
                <p className={`${blogModule.title__container__description__text} ${poppins.className}`} id="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam</p>
            </div>
        </main>
        <main className={blogModule.text__container}>
            <div className={blogModule.text__container__text}>
                <div className={`${blogModule.text__container__text__markdown} ${poppins.className}`} id="markdown">
                    </div>
                </div>
        </main>

        <main className={blogModule.course__info__comments}>
            <h1 className={`${blogModule.course__info__comments__title} ${open.className}`}>Comentarios</h1>
            <div className={blogModule.course__info__comments__container} id="disqus_thread">
                <Script strategy="lazyOnload" 
                dangerouslySetInnerHTML={
                    {__html: `
                    (function() {
                        var d = document, s = d.createElement('script');
                        s.src = 'https://https-sketchia-com-mx.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                        })();
                    `}
                }
                />
                </div>
        </main>
        </main>
    )
}

export default course;