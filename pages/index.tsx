import localFont from '@next/font/local'
import { DM_Sans } from '@next/font/google'
import { NextScript } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


const extrafett = localFont({src: '../public/fonts/sohne-extrafett-webfont.woff2', variable: '--extrafett', style: 'normal', preload: true });
const dm_sans = DM_Sans({variable: '--dm_sans', preload: true, weight: "700", style: 'normal'})

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
        <title>Sketchia</title>
        <meta name="description" content="Empieza a aprender e instruir con sketchia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.header}>
      <Script src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/gradient.js?t=2022-11-04T17%3A54%3A05.903Z" onLoad={
        () => {

          // @ts-ignore
          var gradient = new Gradient()
          gradient.initGradient('.Home_gradient_canvas__cZzsk');
          console.log('Iniciado gradiente.');
        }
      }></Script>
      <canvas className={styles.gradient_canvas} />
        <div className={styles.header__container}>
          <div className={dm_sans.className}>
          <div className={styles.header__container__text}>
            <Image src="/sketchia.svg" alt="Sketchia logo" className={styles.logo} width={180} height={100} />
            <div className={styles.header__container__text__pages}>
            <Link href='/' className={styles.header__container__text__description}>Página principal</Link>
            <Link href='/courses' className={styles.header__container__text__description}>Cursos</Link>
            <Link href='/blog' className={styles.header__container__text__description}>Blog</Link>
            <Link href='/about' className={styles.header__container__text__description}>Acerca de nosotros</Link>
            <Link href='/source' className={styles.header__container__text__description}>Código fuente</Link>
            </div>
            <Link href='/login' className={styles.header__container__text__button}>Iniciar sesión</Link>
          </div>
          </div> 
          <div className='header__container__image'>
          </div>
        </div>
      
      </main>

      <main className={styles.main}>
      <Script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11" onLoad={
        () => {

          // @ts-ignore
          var typed = new Typed('.Home_italic___ByUC', {
            // poner cosas para ensaeñar
            strings: ['Programar', 'Diseñar', 'Cocinar', 'Enseñar', 'Estandarizar', 'Hablar otro idioma', 'Bailar', 'Cantar', 'Llorar', 'Filosofar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte de manera rápida', 'Dormir bien', 'Comer rápido', 'Beber de cabeza', 'Jugar de forma profesional', 'Escribir rápido', 'Leer con naturalidad', 'Escuchar', 'Ver', 'Hacer', 'Hablar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte', 'Dormir', 'Comer', 'Beber', 'Jugar', 'Escribir', 'Leer', 'Escuchar', 'Ver', 'Hacer', 'Hablar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte', 'Dormir', 'Comer', 'Beber', 'Jugar', 'Escribir', 'Leer', 'Escuchar', 'Ver', 'Hacer', 'Hablar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte', 'Dormir', 'Comer', 'Beber', 'Jugar', 'Escribir', 'Leer', 'Escuchar', 'Ver', 'Hacer', 'Hablar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte', 'Dormir', 'Comer', 'Beber', 'Jugar', 'Escribir', 'Leer', 'Escuchar', 'Ver', 'Hacer', 'Hablar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte', 'Dormir', 'Comer', 'Beber', 'Jugar', 'Escribir', 'Leer', 'Escuchar', 'Ver', 'Hacer', 'Hablar', 'Pensar', 'Imaginar', 'Querer', 'Amar', 'Ser', 'Vivir', 'Crear esta página web', 'Relajarte', 'Dormir', 'Comer de forma elegante', 'Quitar el estrés', 'Hacer yoga', 'Escribir rápido en el teclado', 'Leer muy rápido'],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
        });

        console.log('Inicializado escritura dinamica');
        }

      } />
        <h1 className={styles.title}>
          <div className={extrafett.className}>Aprende a <br /><span className={styles.italic}></span><br /> con Sketchia.</div>
        </h1>
        <div className={dm_sans.className}>
        <p className={styles.description}>
          Todos los días miles de personas de todo México inician<br /> sesión en Sketchia para aprender con las herramientas<br /> más avanzadas hasta el momento.
        </p>
        <Link href='/auth' className={styles.title__button__primary}>Comienza ahora</Link>
        </div>
        <div className={styles.grid}>
         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' Sketchia '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
</div>
      
)
}
