import { NextScript } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
        <title>Sketchia</title>
        <meta name="description" content="Empieza a aprender e instruir con sketchia." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/gradient.js?t=2022-11-04T17%3A54%3A05.903Z"></script>
        <script src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/main.js?t=2022-11-04T17%3A32%3A01.643Z"></script>
      </Head>

      <main className={styles.header}>
      <canvas className={styles.gradient_canvas} />
        <div className={styles.header__container}>
          <div className={styles.header__container__text}>
            <Image src="/sketchia.svg" alt="Sketchia logo" className={styles.logo} width={180} height={100} />
            <div className={styles.header__container__text__pages}>
            <a href='/' className={styles.header__container__text__description}>Página principal</a>
            <a href='/courses' className={styles.header__container__text__description}>Cursos</a>
            <a href='/blog' className={styles.header__container__text__description}>Blog</a>
            <a href='/about' className={styles.header__container__text__description}>Acerca de nosotros</a>
            <a href='/source' className={styles.header__container__text__description}>Código fuente</a>
            </div>
            <a href='/login' className={styles.header__container__text__button}>Iniciar sesión</a>
          </div> 
          <div className='header__container__image'>
          </div>
        </div>
      
      </main>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Aprende a <br /><span className={styles.italic}></span><br /> con Sketchia.
        </h1>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11" />
        <p className={styles.description}>
          Más de 3000 personas estan aprendiendo actualmente con Sketchia.
        </p>
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
