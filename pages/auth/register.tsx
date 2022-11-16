import Head from "next/head";
import Script from "next/script";
import loginStyles from "../../styles/login/login.module.css";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AnalyticsScript } from "..";

const poppins = Poppins({
    preload: false,
    style: "normal",
    weight: "700",
    subsets: ["latin"],
});


export default function Login() {
    return (
        <div>
            <Head>
                <title>Registrarse</title>
                <meta name="description" content="Registrarse en Sketchia." />
            </Head>

                <AnalyticsScript />
                <main className={loginStyles.form}>
                <div className={loginStyles.form__container}>
                <div className={poppins.className}>
                <div className={loginStyles.formTitle}>Regístrate</div>
                    <form className={loginStyles.formBody}>
                        <div className={loginStyles.formGroup}>
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" name="email" className={loginStyles.formInput} />
                        </div>
                        <div className={loginStyles.formGroup}>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" name="password" className={loginStyles.formInput} />
                        </div>
                        <div className={loginStyles.formGroup}>
                            <button type="submit" className={loginStyles.formButton}>Continuar</button>
                        </div>
                        <div className={loginStyles.formNetworks}>
                            <Link href="#">
                            <div className={loginStyles.formNetwork}>
                                <Image src="/images/items/google_logo.png" alt="Google" height={20} width={23} className={loginStyles.formNetwork__image} />
                                <span>Regístrate con Google</span>
                            </div>
                            </Link>
                            <Link href="#">
                            <div className={loginStyles.formNetwork}>
                                <Image src="/images/items/facebook_logo.png" alt="Facebook" height={20} width={23} className={loginStyles.formNetwork__image} />
                                <span>Regístrate con Facebook</span>
                            </div>
                            </Link>

                            <Link href="#">
                            <div className={loginStyles.formNetwork}>
                                <Image src="/images/items/discord_logo.png" alt="Discord" height={20} width={26} className={loginStyles.formNetwork__image} />
                                <span>Regístrate con Discord</span>
                                </div>
                                </Link>
                        </div>
                    </form>
                    <div className={loginStyles.formFooter}>
                        <p className={loginStyles.registerText}>¿Ya tienes una cuenta?</p>
                        <Link href="/auth/login" className={loginStyles.registerButton}>Inicia sesión</Link>
                    </div>
                    </div>
                </div>
                </main>               
        </div>
    );
}