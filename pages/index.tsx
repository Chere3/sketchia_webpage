import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import footerStyles from "../styles/home/footer.module.css";
import headerStyles from "../styles/home/header.module.css";
import coursesStyles from "../styles/home/courses.module.css";
import quotesStyles from "../styles/home/quotes.module.css";
import join_usStyles from "../styles/home/join_us.module.css";
import titleStyles from "../styles/home/title.module.css";
import Router from "next/router";

const extrafett = localFont({
  src: "../public/fonts/sohne-extrafett-webfont.woff2",
  variable: "--extrafett",
  style: "normal",
  preload: true,
});

const dm_sans = Poppins({
  variable: "--dm_sans",
  preload: true,
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});


export function AnalyticsScript() {
return (
  <div>
     <Script
          id="clarity_records"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", ${process.env.CLARITY});`,
          }}
        />

        <Script
          id="google_analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WB48WCP5H0"
          onLoad={() => {
            // @ts-ignore
            window.dataLayer = window.dataLayer || [];
            // @ts-ignore
            function gtag() {
              // @ts-ignore
              dataLayer.push(arguments);
            }
            // @ts-ignore
            gtag("js", new Date());

            // @ts-ignore
            gtag("config", `${process.env.GOOGLE_ANALYTICS}`);
          }}
        ></Script>
  </div>
)
};

function CourseCard(image?: string, title?: string, description?: string) {
  return (
    <div className={coursesStyles.courses__carrousel__container__card}><div className={coursesStyles.courses__carrousel__container__card__image}><Image src="/images/not_image_image.png" alt="Foto del curso" width={276} height={168} className={coursesStyles.courses__carrousel__container__card__image__img}/>
                  </div>
                  <div className={coursesStyles.courses__carrousel__container__card__text}>
                    <div className={dm_sans.className}>
                      <h1 className={coursesStyles.courses__carrousel__container__card__text__title}>
                        "Curso 1"
                      </h1>
                      <p className={coursesStyles.courses__carrousel__container__card__text__description}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nunc aliquet nisl, eget aliquam nisl nisl eu nunc. Sed euismod, nisl vitae ultricies lacinia, nisl nunc aliquet nisl, eget aliquam nisl nisl eu nunc."
                      </p>
                      </div>
                  </div>
                  </div>
  )
}

function CourseCarrousel() {
  return (
    <div className={coursesStyles.courses__carrousel}>
      <div className={coursesStyles.courses__carrousel__container}>
        {CourseCard("/images/image_not_image.png", "Curso 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl.")}
        {CourseCard("/images/image_not_image.png", "Curso 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl.")}
        {CourseCard("/images/image_not_image.png", "Curso 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl.")}
        {CourseCard("/images/image_not_image.png", "Curso 4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl.")}
        {CourseCard("/images/image_not_image.png", "Curso 5", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl. Sed euismod, nunc vel ultricies lacinia, nisl nunc aliquet nisl, eget ultricies nisl lorem eget nisl.")}
        </div>
    </div>
  )
}

async function getCourseData() {
  const res = await fetch(`https://api.sketchia.com.mx/v0/courses?limit=6`);
  const data = (await res.json()).courses;

  // replace the data of the course with the data from the API
  const container = document.getElementsByClassName("courses_courses__carrousel__container__TVbyb");
  const cards = container[1].children;

  console.log(data)

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const image = card.children[0].children[0];
    const title = card.children[1].children[0].children[0];
    const description = card.children[1].children[0].children[1];

    // @ts-ignore
    image.srcset = data[i]?.data?.imagen;
    title.innerHTML = data[i]?.data.titulo;
    description.innerHTML = data[i]?.data.description;
    // on click, redirect to the course page

    // @ts-ignore
    card.onclick = () => {
      Router.push(`/courses/${data[i].id}`);
    }

  }
}


 function Home() {
  getCourseData();
  return (
    <div className={titleStyles.container}>
      <Head>
        <title>Sketchia</title>
        <meta
          name="description"
          content="Empieza a aprender e instruir con sketchia."
        />
        <link rel="icon" href="/favicon.ico" />
         
      </Head>

      <main className={headerStyles.header}>
      <AnalyticsScript />
        <Script
          src="https://pyywzoboulzbhbnihayt.supabase.co/storage/v1/object/public/recursos/gradient.js?t=2022-11-04T17%3A54%3A05.903Z"
          strategy="lazyOnload"
          onLoad={async () => {
            // @ts-ignore
            var gradient = new Gradient();
            gradient.initGradient(".title_gradient_canvas__Et8AW");
            console.log("Iniciado gradiente.");
          }}
        ></Script>
        <canvas className={titleStyles.gradient_canvas} />
        <div className={headerStyles.header__container}>
          <div className={dm_sans.className}>
            <div className={headerStyles.header__container__text}>
              <Image
                src="/sketchia.svg"
                alt="Sketchia logo"
                className={styles.logo}
                width={180}
                height={100}
              />
              <div className={headerStyles.header__container__text__pages}>
                <Link
                  href="/"
                  className={headerStyles.header__container__text__description}
                >
                  Página principal
                </Link>
                <Link
                  href="/courses"
                  className={headerStyles.header__container__text__description}
                >
                  Cursos
                </Link>
                <Link
                  href="/blog"
                  className={headerStyles.header__container__text__description}
                >
                  Blog
                </Link>
                <Link
                  href="/info/about"
                  className={headerStyles.header__container__text__description}
                >
                  Acerca de nosotros
                </Link>
                <Link
                  href="https://github.com/chere3/sketchia_proyecto"
                  className={headerStyles.header__container__text__description}
                >
                  Código fuente
                </Link>
              </div>
              <Link
                href="/auth/login"
                className={headerStyles.header__container__text__button}
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
          <div className="header__container__image"></div>
        </div>
      </main>

      <main className={titleStyles.main}>
        <Script
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"
          onLoad={() => {
            // @ts-ignore
            var typed = new Typed(".title_italic__a98OH", {
              // poner cosas para ensaeñar
              strings: [
                "Programar",
                "Diseñar",
                "Cocinar",
                "Enseñar",
                "Estandarizar",
                "Hablar otro idioma",
                "Bailar",
                "Cantar",
                "Llorar",
                "Hacer bailes para tiktok",
                "Controlar tu fuerza",
                "Controlar tus sentimientos",
                "Ser productivo",
              ],
              typeSpeed: 50,
              backSpeed: 50,
              backDelay: 1000,
              loop: true,
              loopCount: Infinity,
              showCursor: true,
              cursorChar: "|",
            });

            console.log("Inicializado escritura dinamica");
          }}
        />
        <div className={titleStyles.title__container}>
          <h1 className={titleStyles.title}>
            <div className={extrafett.className}>
              Aprende a <br />
              <span className={titleStyles.italic}></span>
              <br /> con Sketchia.
            </div>
          </h1>
        </div>

        <div className={dm_sans.className}>
          <p className={titleStyles.description}>
            Todos los días miles de personas de todo México inician
            <br /> sesión en Sketchia para aprender con las herramientas
            <br /> más avanzadas hasta el momento.
          </p>
          <Link
            href="/auth/register"
            className={titleStyles.title__button__primary}
          >
            Comienza ahora
          </Link>
        </div>
      </main>

      <main className={coursesStyles.courses_info}>
        <div className={coursesStyles.courses__info__container}>
          <div className={coursesStyles.courses__info__container__text}>
            <div className={extrafett.className}>
              <h1
                className={coursesStyles.courses__info__container__text__title}
              >
                Tenemos docenas de
                <br />
                cursos para ti
              </h1>
            </div>
            <div className={coursesStyles.courses__carrousel}>
              <div className={coursesStyles.courses__carrousel__container}>
               <CourseCarrousel />
              </div>
            </div>
          </div>
        </div>

        <main className={quotesStyles.tools}>
          <div className={quotesStyles.tools__container}>
            <div className={quotesStyles.tools__container__title}>
              <div className={extrafett.className}>
                <h1 className={quotesStyles.tools__container__title__text}>
                  Historias de éxito
                </h1>
                <div className={quotesStyles.tools__container__historys}>
                  <div className={quotesStyles.quote}>
                    <div className={dm_sans.className}>
                      <Image
                        src="/images/reviews_clients/morre.png"
                        alt="Adolescente tomandose una selfie en el baño"
                        width={150}
                        height={150}
                        className={quotesStyles.quote__author__image}
                      ></Image>
                      <p className={quotesStyles.quote__text}>
                        Gracias a esta plataforma he podido aprender a programar
                        y a crear mi propia página web. Ahora puedo trabajar
                        desde casa y ganar dinero por internet siendo mi propio
                        jefe.
                      </p>
                    </div>
                  </div>
                  <div className={quotesStyles.quote}>
                    <div className={dm_sans.className}>
                      <Image
                        src="/images/reviews_clients/señora.png"
                        alt="Foto de una adolescente mirando a la camara de una forma rarita"
                        width={150}
                        height={150}
                        className={quotesStyles.quote__author__image}
                      ></Image>
                      <p className={quotesStyles.quote__text}>
                        Sigo sin entender como no pude descubrir esta plataforma
                        antes, desde que la uso ya no puedo dejar de aprender,
                        es bonito luego ver que mis contribuciones son usadas
                        por la marca.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <main className={join_usStyles.join_us}>
          <div className={join_usStyles.join_us__container}>
            <div className={join_usStyles.join_us__container__title}>
              <div className={extrafett.className}>
                <h1 className={join_usStyles.join_us__container__title__text}>
                  Entonces, <br />
                  ¿Qué esperas para unirte?
                </h1>
                <div className={join_usStyles.join_us__container__buttons}>
                  <div className={dm_sans.className}>
                    <Link
                      href="/auth/register"
                      className={join_usStyles.join_us__container__button}
                    >
                      Únete como estudiante
                    </Link>
                    <Link
                      href="/auth/register?as=teacher"
                      className={join_usStyles.join_us__container__button}
                    >
                      Únete como profesor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className={footerStyles.footer}>
          <div className={footerStyles.footer__container}>
            <div className={footerStyles.footer__container__logo}>
              <Image
                className={footerStyles.footer__logo}
                src="/sketchia.svg"
                alt="Logo de la plataforma"
                width={200}
                height={100}
              />
            </div>
            <div className={footerStyles.footer__container__links}>
              <div className={dm_sans.className}>
                <Link
                  href="/info/about"
                  className={footerStyles.footer__container__link}
                >
                  Información
                </Link>
                <Link
                  href="/legal/privacy"
                  className={footerStyles.footer__container__link}
                >
                  Privacidad
                </Link>
              </div>
            </div>
            <div className={footerStyles.footer__container__links}>
              <div className={dm_sans.className}>
                <Link
                  href="/legal/cookies"
                  className={footerStyles.footer__container__link}
                >
                  Cookies
                </Link>
                <Link
                  href="/legal/terms"
                  className={footerStyles.footer__container__link}
                >
                  Términos
                </Link>
              </div>
              <div className={footerStyles.footer__container__links}>
                <div className={dm_sans.className}>
                  <Link
                    href="/courses"
                    className={footerStyles.footer__container__link}
                  >
                    Cursos
                  </Link>
                  <Link
                    href="/info/contact"
                    className={footerStyles.footer__container__link}
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
