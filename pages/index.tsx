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
        
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <script src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/gradient.js"></script>
        <script src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/main.js?t=2022-11-03T18%3A32%3A22.335Z"></script>
          <canvas id="#gradient-canvas"></canvas>
          Aprende a <br /><span className={styles.italic}>texto variable</span><br /> con Sketchia.
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
