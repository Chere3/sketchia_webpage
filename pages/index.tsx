import localFont from '@next/font/local'
import { DM_Sans, Poppins } from '@next/font/google'
import { NextScript } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


const extrafett = localFont({src: '../public/fonts/sohne-extrafett-webfont.woff2', variable: '--extrafett', style: 'normal', preload: true });
const sovana = localFont({src: '../public/fonts/sovana-regular-webfont.woff2', variable: '--sovana', style: 'normal', preload: true });
const dm_sans = Poppins({variable: '--dm_sans', preload: true, weight: "600", style: 'normal', subsets: ['latin'] });

export default function Home() {
  return (
    <div className={styles.container}>

    <Head>
        <title>Sketchia</title>
        <meta name="description" content="Empieza a aprender e instruir con sketchia." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.header}>
      <Script src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/gradient.js?t=2022-11-04T17%3A54%3A05.903Z"  onLoad={
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
            <Link href='https://github.com/chere3/sketchia_proyecto' className={styles.header__container__text__description}>Código fuente</Link>
            </div>
            <Link href='/auth/login' className={styles.header__container__text__button}>Iniciar sesión</Link>
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
            strings: ['Programar', 'Diseñar', 'Cocinar', 'Enseñar', 'Estandarizar', 'Hablar otro idioma', 'Bailar', 'Cantar', 'Llorar', 'Hacer bailes para tiktok', 'Controlar tu fuerza', 'Controlar tus sentimientos', 'Ser productivo'],
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
      <div className={styles.title__container}>
      <h1 className={styles.title}>
          <div className={extrafett.className}>Aprende a <br /><span className={styles.italic}></span><br /> con Sketchia.</div>
        </h1>  
      </div>

      <div className={dm_sans.className}>
        <p className={styles.description}>Todos los días miles de personas de todo México inician<br /> sesión en Sketchia para aprender con las herramientas<br /> más avanzadas hasta el momento.</p>
        <Link href='/auth/register' className={styles.title__button__primary}>Comienza ahora<span className={styles.title__button__primary__arrow} /></Link>
        </div>
      </main>


      <main className={styles.courses_info}>
        <div className={styles.courses__info__container}>
          <div className={styles.courses__info__container__text}>
            <div className={extrafett.className}><h1 className={styles.courses__info__container__text__title}>Tenemos docenas de<br />cursos para ti</h1></div>
            <div className={styles.courses__carrousel}>
              <div className={styles.courses__carrousel__container}>
                <div className={styles.courses__carrousel__container__card}>
                  <div className={styles.courses__carrousel__container__card__image}>
                    <Image src="/images/not_image_image.png" alt="Foto del curso" width={276} height={168} /> 
                    </div>
                    <div className={styles.courses__carrousel__container__card__text}>
                      <div className={dm_sans.className}>
                      <h1 className={styles.courses__carrousel__container__card__text__title}>Curso #1</h1>
                      <p className={styles.courses__carrousel__container__card__text__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                      </div>
                    </div>
                    <div className={styles.courses__carrousel__container__card}>
                      <div className={styles.courses__carrousel__container__card__image}>
                        <Image src="/images/not_image_image.png" alt="Foto del curso" width={276} height={168} /> 
                        </div>
                        <div className={styles.courses__carrousel__container__card__text}>
                          <div className={dm_sans.className}>
                            <h1 className={styles.courses__carrousel__container__card__text__title}>Curso #1</h1>
                            <p className={styles.courses__carrousel__container__card__text__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>
                            </div>
                            <div className={styles.courses__carrousel__container__card}>
                              <div className={styles.courses__carrousel__container__card__image}>
                                <Image src="/images/not_image_image.png" alt="Foto del curso" width={276} height={168} /> 
                                </div>
                                <div className={styles.courses__carrousel__container__card__text}>
                                  <div className={dm_sans.className}>
                                    <h1 className={styles.courses__carrousel__container__card__text__title}>Curso #1</h1>
                                    <p className={styles.courses__carrousel__container__card__text__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>
                            </div>
                            <div className={styles.courses__carrousel__container__card}>
                      <div className={styles.courses__carrousel__container__card__image}>
                        <Image src="/images/not_image_image.png" alt="Foto del curso" width={276} height={168} /> 
                        </div>
                        <div className={styles.courses__carrousel__container__card__text}>
                          <div className={dm_sans.className}>
                            <h1 className={styles.courses__carrousel__container__card__text__title}>Curso #1</h1>
                            <p className={styles.courses__carrousel__container__card__text__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>
                            </div>
                            <div className={styles.courses__carrousel__container__card}>
                      <div className={styles.courses__carrousel__container__card__image}>
                        <Image src="/images/not_image_image.png" alt="Foto del curso" width={276} height={168} /> 
                        </div>
                        <div className={styles.courses__carrousel__container__card__text}>
                          <div className={dm_sans.className}>
                            <h1 className={styles.courses__carrousel__container__card__text__title}>Curso #1</h1>
                            <p className={styles.courses__carrousel__container__card__text__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div> 
                            </div>
                            </div>

                            <main className={styles.tools}>
                              <div className={styles.tools__container}>
                                <div className={styles.tools__container__title}>
                                    <div className={extrafett.className}>
                                    <h1 className={styles.tools__container__title__text}>Historias de éxito</h1>
                                    <div className={styles.tools__container__historys}>
                                      <div className={styles.quote}>
                                          <div className={dm_sans.className}>
                                          <Image src="/images/reviews_clients/morre.png" alt='Adolescente tomandose una selfie en el baño' width={150} height={150} className={styles.quote__author__image}></Image>
                                          <p className={styles.quote__text}>
                                         Gracias a esta plataforma he podido aprender a programar y a crear mi propia página web. Ahora puedo trabajar desde casa y ganar dinero por internet siendo mi propio jefe.
                                          </p>
                                          </div>
                                      </div>
                                      <div className={styles.quote}>
                                          <div className={dm_sans.className}>
                                          <Image src="/images/reviews_clients/señora.png" alt='Foto de una adolescente mirando a la camara de una forma rarita' width={150} height={150} className={styles.quote__author__image}></Image>
                                          <p className={styles.quote__text}>
                                          Sigo sin entender como no pude descubrir esta plataforma antes, desde que la uso ya no puedo dejar de aprender, es bonito luego ver que mis contribuciones son usadas por la marca.
                                          </p>
                                          </div>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                            </main>
                            <main className={styles.join_us}>
                              <div className={styles.join_us__container}>
                                <div className={styles.join_us__container__title}>
                                    <div className={extrafett.className}>
                                    <h1 className={styles.join_us__container__title__text}>Entonces<br />¿Qué esperas para unirte?</h1>
                                    <div className={styles.join_us__container__button}>
                                      <Link href="/auth/register?as=teacher">
                                      <h3 className={styles.join_us__container__button__text}>Regístrate como profesor</h3>
                                      </Link>
                                      <Link href="/auth/register">
                                      <h3 className={styles.join_us__container__button__text}>Regístrate como estudiante</h3>
                                      </Link>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                            </main>
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
