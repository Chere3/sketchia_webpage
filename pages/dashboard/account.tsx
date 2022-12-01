import { Open_Sans, Poppins } from "@next/font/google";
import { updateProfile } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useAuth } from "reactfire";
import { AnalyticsScript } from "..";

import accountStyles from "../../styles/dashboard/Account.module.css";
import styles from "../../styles/interface/Global.module.css";

const open = Open_Sans({
    preload: true,
    style: "normal",
    weight: "800",
    subsets: ["latin"],
    variable: "--open_sans",
    fallback: ["Helvetica"]
})

const poppins = Poppins({
    preload: true,
    style: "normal",
    weight: "600",
    subsets: ["latin"],
    variable: "--poppins",
    fallback: ["Helvetica"]
})



function account() {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (auth.currentUser == null) {
            router.push("/auth/login");
        }
    }, [auth.currentUser]);

    const file = useRef<HTMLInputElement>();

    function handleFile(e: any) {
        e.preventDefault();
        file.current?.click();

        file.current?.addEventListener("change", (e: any) => {
            const file = e.target.files[0];

            const reader = new FileReader();

            reader?.readAsDataURL(file);

            reader.onload = (e) => {
                if (e.target?.result) {
                    const img = document.getElementById("foto_de_perfil") as HTMLImageElement;
                    img.srcset = e.target.result as string;
                } else {
                    console.log("Error");
                }
            }
        });
    }

    function uploadToStorage() {
        
    }

    

    if (auth.currentUser !== null) {
        return (
            <main className={accountStyles.main}>
                <AnalyticsScript />
                <Head>
                    <title>Mi cuenta</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

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

        <main className={accountStyles.settings__main}>
            <div className={accountStyles.settings__main__container}>
                <div className={accountStyles.settings__main__container__title}>
                    <h1 className={`${accountStyles["settings__main__container__title__text"]} ${open["className"]}`}>Configuración de tu cuenta</h1>
                </div>
                <div className={accountStyles.settings__main__container__content}>
                <h2 className={`${accountStyles["settings__main__container__subtitle"]} ${open["className"]}`}>Tú avatar</h2>
                    <div className={accountStyles.settings__main__container__content__container__info}>
                        <div className={accountStyles.settings__main__container__content__container__info__photo}>
                            <Image src={auth.currentUser.photoURL ?? "/images/not_image_image.png"} alt="Foto de perfil" width={250} height={250} className={accountStyles.settings__main__container__content__container__info__photo__sl} id="foto_de_perfil"/>
                            </div>
                            <div className={`${accountStyles.settings__main__container__content__container__info__photo__container__buttons} ${poppins.className}`}>
                                <button className={accountStyles.settings__main__container__content__container__info__photo__container__buttons__button} onClick={handleFile}>Cambiar foto</button>
                                <input style={{display: 'none'}} ref={file as any} type="file" accept="image/*" />
                                <button className={`${accountStyles.settings__main__container__content__container__info__photo__container__buttons__button} ${accountStyles.delete__button}`}>Eliminar foto</button>
                                </div>
                                <p className={`${accountStyles.settings__main__container__content__container__info__photo__text} ${poppins.className}`}>*Se recomienda que la foto de perfil sea cuadrada al igual que este hecha para ser circular</p>
                            </div>
                    </div>
                    <div className={accountStyles.settings__main__container__content}>
                    <h2 className={`${accountStyles["settings__main__container__subtitle"]} ${open["className"]}`}>Tus datos</h2>
                    <div className={accountStyles.settings__main__container__content__container__info}>
                        <div className={accountStyles.settings__main__container__content__container__info__forms}>
                        <label className={`${accountStyles.settings__main__container__content__container__info__label} ${poppins.className}`}>Nombre:</label>
                        <input type="text" className={`${accountStyles.settings__main__container__content__container__info__input} ${poppins.className}`} placeholder="Nombre" defaultValue={auth.currentUser.displayName ?? ""} />
                        <label className={`${accountStyles.settings__main__container__content__container__info__label} ${poppins.className}`}>Correo electrónico:</label>
                        <input type="email" className={`${accountStyles.settings__main__container__content__container__info__input} ${poppins.className}`} placeholder="Correo electrónico" defaultValue={auth.currentUser.email ?? ""} />
                        <label className={`${accountStyles.settings__main__container__content__container__info__label} ${poppins.className}`}>Contraseña:</label>
                        <input type="password" className={`${accountStyles.settings__main__container__content__container__info__input} ${poppins.className}`} placeholder="Contraseña" />
                        <label className={`${accountStyles.settings__main__container__content__container__info__label} ${poppins.className}`}>Confirmar contraseña:</label>
                        <input type="password" className={`${accountStyles.settings__main__container__content__container__info__input} ${poppins.className}`} placeholder="Confirmar contraseña" />
                        <button className={`${accountStyles.settings__main__container__content__container__info__button} ${poppins.className}`}>Guardar cambios</button>
                        </div>
                        </div>
                    </div>
                    <div className={accountStyles.settings__main__container__content}>
                    <h2 className={`${accountStyles["settings__main__container__subtitle"]} ${open["className"]}`}>Opciones peligrosas</h2>
                    <div className={accountStyles.settings__main__container__content__container__info}>
                        <div className={accountStyles.settings__main__container__content__container__info__buttons}>
                        <button className={`${accountStyles.settings__main__container__content__container__info__buttons__button} ${accountStyles.delete__button} ${poppins.className}`}>Eliminar cuenta</button>
                        <button className={`${accountStyles.settings__main__container__content__container__info__buttons__button} ${accountStyles.delete__button} ${poppins.className}`}>Cerrar sesión</button>
                        <button className={`${accountStyles.settings__main__container__content__container__info__buttons__button} ${accountStyles.delete__button} ${poppins.className}`}>Desuscribirme de todos los cursos</button>
                </div>
                </div>
                </div>
                </div>         
        </main>
            </main>
        )
    }
}

export default account;