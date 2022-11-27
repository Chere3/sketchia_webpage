import { useRouter } from "next/router";
import { AnalyticsScript } from "..";
import { Open_Sans, Poppins } from "@next/font/google";

import Head from "next/head";
import React from "react";
import Image from "next/image";
import styles from "../../styles/interface/Global.module.css";
import Link from "next/link";
import courseModule from "../../styles/courses/Course.module.css";
import { useAuth } from "reactfire";
import Script from "next/script";


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

    async function getCourseData() {
        // fetch course data
        const data = await fetch(`https://api.sketchia.com.mx/courses/${id}`)
        let course = (await data.json()).course;

        if (course?.disponible == false) return router.push("/courses/agotado");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const titulo = document.getElementById("titulo");
            const titulo_pagina = document.getElementById("titulo_pagina");
            const descripcion = document.getElementById("descripcion");
    
            const item1 = document.getElementById("item_1")?.children[1].children[0];
            const item2 = document.getElementById("item_2")?.children[1].children[0];
            const item3 = document.getElementById("item_3")?.children[1].children[0];
    
            const capitulo = document.getElementById("capitulo_1");
    
            titulo!.innerHTML = course?.titulo;
            descripcion!.innerHTML = course?.description;
            item1!.innerHTML = course?.materiales[0].split("/")[8];
            item2!.innerHTML = course?.materiales[1].split("/")[8];
            item3!.innerHTML = course?.materiales[2].split("/")[8];
    
            capitulo!.children[1].children[0].innerHTML = course?.capitulos[0].description;
            (capitulo!.children[0].children[0] as HTMLImageElement).srcset = course?.capitulos[0].imagen;
    
            // wait for the page to load
            await new Promise((resolve) => setTimeout(resolve, 1000));
            loadingScreen();

            return course;
        } catch (e) {
            const titulo = document.getElementById("titulo");
        const titulo_pagina = document.getElementById("titulo_pagina");
        const descripcion = document.getElementById("descripcion");

        const item1 = document.getElementById("item_1")?.children[1].children[0];
        const item2 = document.getElementById("item_2")?.children[1].children[0];
        const item3 = document.getElementById("item_3")?.children[1].children[0];

        const capitulo = document.getElementById("capitulo_1");

        
        titulo!.innerHTML = course?.titulo;
        descripcion!.innerHTML = course?.description;
        item1!.innerHTML = course?.materiales[0].split("/")[8];
        item2!.innerHTML = course?.materiales[1].split("/")[8];
        item3!.innerHTML = course?.materiales[2].split("/")[8];

        capitulo!.children[1].children[0].innerHTML = course?.capitulos[0].description;
        (capitulo!.children[0] as HTMLImageElement).srcset = course?.capitulos[0].imagen;

        // wait for the page to load
        await new Promise((resolve) => setTimeout(resolve, 1000));
        loadingScreen();

        return course;
        }
    }

    async function loadingScreen() {
        const loading = document.getElementById("loading");

        loading!.style!.display = "none";
    }

    async function suscribeToCourse(e: any) {
        e.preventDefault();

        if (!auth.currentUser) return router.push("/auth/login");

        try {
        const data = await fetch(`https://api.sketchia.com.mx/v0/users/${auth.currentUser?.uid}`);
        const user = (await data.json()).user;

        
        if (!user) {
            await fetch(`https://api.sketchia.com.mx/v0/users/${auth.currentUser?.uid}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    courses: [id]
                })
            });

            router.reload();
        }

        await fetch(`https://api.sketchia.com.mx/v0/courses/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                courses: []
            })
        });

        router.reload();

    } catch (e) {
        console.log(e)
    }
    }

    async function checkIfUserIsSubscribed() {
        if (!auth.currentUser) return;

        const data = await fetch(`https://api.sketchia.com.mx/v0/users/${auth.currentUser?.uid}`);
        const user = (await data.json()).user;

        if (user.courses.includes(id)) {

            const button = document.getElementById("suscribe_button");
            button!.innerHTML = "Borrar de mis cursos"
            button!.style!.width = "15rem";

            return user
        }

        return user;
    }


    async function principalManager() {
        const courseData = await getCourseData();
        const subdata = await checkIfUserIsSubscribed();

        if (subdata && courseData) {
            if (subdata.courses.includes(id)) {
                try {
                const item1 = document.getElementById("item_1");
                const item2 = document.getElementById("item_2");
                const item3 = document.getElementById("item_3");

                const capitulo = document.getElementById("capitulo_1");

                item1!.id = courseData.materiales[0];
                item2!.id = courseData.materiales[1];
                item3!.id = courseData.materiales[2];
                item1!.children[0].id = courseData.materiales[0];
                item2!.children[0].id = courseData.materiales[1];
                item3!.children[0].id = courseData.materiales[2];
                item1!.children[1].children[0].id = courseData.materiales[0];
                item2!.children[1].children[0].id = courseData.materiales[1];
                item3!.children[1].children[0].id = courseData.materiales[2];


                capitulo!.children[1].children[0].id = courseData.capitulos[0].link;
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }

    async function clickHandler(e: any) {

        if (!auth.currentUser) return router.push("/auth/login");
        if (!e.target.id) return;
        if (!(e.target.id.startsWith("https://") || e.target.id.startsWith("/"))) return router.push(`/`);

        router.push(`${e.target.id}`);
    }
    
    principalManager();
    return (
        <main>
                <AnalyticsScript />
            <Head>
                <title id="titulo_pagina">Curso</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="loading" className={courseModule.loading}>
                <div className={`${courseModule.loading__container} ${open.className}`}>
                    <Image src="/sketchia.svg" width={400} height={100} alt={"Logo"} />
                    <h1>Cargando página espera...</h1>
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
        <main className={courseModule.title__container}>
            <div className={courseModule.title__background}>
            <h1 className={`${courseModule.title__container__title} ${open.className}`} id="titulo">Curso de</h1>
            </div>
            <div className={courseModule.title__container__description}>
                <p className={`${courseModule.title__container__description__text} ${poppins.className}`} id="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue. Nullam</p>
            </div>
            <div className={`${courseModule.title__info__course} ${poppins.className}`}>
                <button className={`${courseModule.title__container__button} ${open.className}`} onClick={suscribeToCourse} id='suscribe_button'>Obtener</button>
            </div>
        </main>

        <main className={courseModule.course__info__materials}>
            <div className={courseModule.course__info__materials__container}>
                <div className={courseModule.course__info__materials__container__title}>
                    <h1 className={`${courseModule.course__info__materials__container__title__text} ${open.className}`}>Materiales</h1>
                </div>
                <div className={courseModule.course__info__materials__container__list}>
                    <div className={courseModule.course__info__materials__container__list__item} id="item_1" onClick={clickHandler}>
                        <div className={courseModule.course__info__materials__container__list__item__icon}>
                            <Image src="/images/items/file_logo.png" alt="file" width={16} height={18} />
                        </div>
                        <div className={courseModule.course__info__materials__container__list__item__text}>
                            <p className={`${courseModule.course__info__materials__container__list__item__text__description} ${poppins.className}`}>Archivo_1</p>
                            <div className={courseModule.course__info__materials__container__list__item__text__space}></div>
                        </div>
                    </div>
                    <div className={courseModule.course__info__materials__container__list__item} id="item_2" onClick={clickHandler}>
                        <div className={courseModule.course__info__materials__container__list__item__icon}>
                            <Image src="/images/items/file_logo.png" alt="file" width={16} height={18} />
                        </div>
                        <div className={courseModule.course__info__materials__container__list__item__text}>
                            <p className={`${courseModule.course__info__materials__container__list__item__text__description} ${poppins.className}`}>Archivo_2</p>
                            <div className={courseModule.course__info__materials__container__list__item__text__space}></div>
                        </div>
                    </div>
                    <div className={courseModule.course__info__materials__container__list__item} id="item_3" onClick={clickHandler}>
                        <div className={courseModule.course__info__materials__container__list__item__icon}>
                            <Image src="/images/items/file_logo.png" alt="file" width={16} height={18}  />
                        </div>
                        <div className={courseModule.course__info__materials__container__list__item__text}>
                            <p className={`${courseModule.course__info__materials__container__list__item__text__description} ${poppins.className}`}>Archivo_3</p>
                            <div className={courseModule.course__info__materials__container__list__item__text__space}></div>
                            </div>
                        </div>
                        </div>
                        </div>
        </main>

        <main className={courseModule.course__info__episodes}>
            <div className={courseModule.course__info__episodes__container}>
                <div className={courseModule.course__info__episodes__container__title}>
                    <h1 className={`${courseModule.course__info__episodes__container__title__text} ${open.className}`}>Episodios</h1>
                </div>
                <div className={courseModule.course__info__episodes__container__list}>
                    <div className={courseModule.course__info__episodes__container__list__item} id="capitulo_1" onClick={clickHandler}>
                        <div className={courseModule.course__info__episodes__container__list__item__icon}>
                            <Image src="/images/items/video_logo.png" alt="video" width={170} height={90} />
                        </div>
                        <div className={courseModule.course__info__episodes__container__list__item__text}>
                            <p className={`${courseModule.course__info__episodes__container__list__item__text__description} ${poppins.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                            <div className={courseModule.course__info__episodes__container__list__item__text__space}></div>
                        </div>
                    </div>
                    </div>
                    </div>
        </main>

        <main className={courseModule.course__info__comments}>
            <h1 className={`${courseModule.course__info__comments__title} ${open.className}`}>Comentarios</h1>
            <div className={courseModule.course__info__comments__container} id="disqus_thread">
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