import Head from "next/head";
import loginStyles from "../../styles/auth/auth.module.css";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AnalyticsScript } from "..";
import { useAuth } from "reactfire";
import { createRef, useCallback, useEffect } from "react";
import {AuthProvider, browserPopupRedirectResolver, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { Router, useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

const poppins = Poppins({
    preload: true,
    style: "normal",
    weight: "700",
    subsets: ["latin"],
    variable: "--poppins",
    fallback: ["Helvetica"]
});


function Login() {

    const auth = useAuth();
    const router = useRouter();
    const recaptchaRef = createRef();

    function showError(a: any, email?: any, password?: any) {
        const title = document.getElementsByTagName("label");
        const inputs = document.getElementsByTagName("input");
        const button = document.getElementsByTagName("button");

        title.item(0)!.innerHTML = a;
        title.item(0)!.style.color = "#ff4a4a";
        inputs.item(0)!.style.transition = "all 0.5s ease-in-out";
        inputs.item(0)!.style.borderColor = "#ff00007a";
        inputs.item(1)!.style.transition = "all 0.5s ease-in-out";
        inputs.item(1)!.style.borderColor = "#ff00007a";
        button.item(0)!.setAttribute("disabled", "true");
        button.item(0)!.style.cursor = "not-allowed";

        document.addEventListener("keyup", (e: any) => {
            try {
            if (e.target.value !== email && e.target.value !== password) {
                title.item(0)!.innerHTML = "Correo electronico";
                title.item(0)!.style.color = "#000";
                inputs.item(0)!.style.transition = "all 0.5s ease-in-out";
                inputs.item(0)!.style.borderColor = "#00000000";
                inputs.item(1)!.style.transition = "all 0.5s ease-in-out";
                inputs.item(1)!.style.borderColor = "#00000000";
                button.item(0)!.removeAttribute("disabled");
                button.item(0)!.style.cursor = "pointer";

                document.removeEventListener("keyup", () => {});
            } else {}
            } catch (error) {
                console.log(error);
            }
        });


    }

    async function signIn(params: any) {

        params.preventDefault();

        const email = params.target.email.value;
        const password = params.target.password.value;

        if (!(email || password)) return showError("Debes de llenar todos los campos.");

        try {
            const data = await signInWithEmailAndPassword(auth, email, password);

            if (data.user) {
                router.push("/dashboard");
            }
        } catch (error: any) {
            if (String(error.message).includes("auth/user-not-found")) return showError("Al parecer aún no tienes cuenta, ¿por qué no te registras?", email, password);
            if (String(error.message).includes("auth/wrong-password")) return showError("La contraseña es incorrecta, intenta de nuevo.", email, password);
            if (String(error.message).includes("auth/invalid-email")) return showError("El correo electrónico no es válido, intenta de nuevo.", email, password);

            return showError("Ha ocurrido un error desconocido, intenta de nuevo más tarde.", email, password);
        }
    }

    async function signInWithSocialNetworks(e: any) {
        e.preventDefault();

        var provider;
        const href = e.target?.children[0]?.alt ?? e.target?.textContent;
        
        const google = new GoogleAuthProvider();
        const facebook = new FacebookAuthProvider();
        const github = new GithubAuthProvider();

        if (href.includes("Google")) provider = google;
        if (href.includes("Facebook")) provider = facebook;
        if (href.includes("Github")) provider = github;

        console.log(href);

        try {
            const data = await signInWithPopup(auth, provider as AuthProvider, browserPopupRedirectResolver);
            const user = data.user;

            const classWithoutFunction = provider?.constructor;
            // @ts-ignore
            const credential = classWithoutFunction.credentialFromResult(data);
            const token = credential?.accessToken;

            if (token) {
                router.push("/dashboard");
            }

            if (!token) {
                console.log("No se ha podido iniciar sesión con la red social.");
            }
        }

        catch (error: any) {
            if (String(error.message).includes("auth/account-exists-with-different-credential")) return showError("Ya existe una cuenta con este correo electrónico, intenta iniciar sesión con otra red social");
            if (String(error.message).includes("auth/user-not-found")) return showError("Al parecer aún no tienes cuenta, ¿por qué no te registras?");
            if (String(error.message).includes("auth/wrong-password")) return showError("La contraseña es incorrecta, intenta de nuevo.");
            if (String(error.message).includes("auth/invalid-email")) return showError("El correo electrónico no es válido, intenta de nuevo.");
            if (String(error.message).includes("auth/credential-already-in-use")) return showError("Ya existe una cuenta con este correo electrónico, intenta iniciar sesión con otra red social");
            if (String(error.message).includes("auth/invalid-credential")) return showError("Al parecer tu navegador no soporta esta red social, intenta con otra o sal del modo incógnito.");

            console.log(error);
            return showError("Ha ocurrido un error desconocido, intenta de nuevo más tarde.");
    }
    }
    
    useEffect(() => {
        if ((auth.currentUser)) {
            router.push("/dashboard");
        }
    }, [auth.currentUser]);

        return (
            <div>
                <Head>
                    <title>Iniciar sesión</title>
                    <meta name="description" content="Iniciar sesión" />
                </Head>
                <AnalyticsScript />
                <div className={loginStyles.background}>
                <div className={loginStyles.logo}>
                    <Link href="/" className={loginStyles.logo_link}>
                    <Image src="/../sketchia.svg" alt="Logo" height={50} width={250} />
                    </Link>
                </div>
                    <main className={loginStyles.form}>
                    <div className={loginStyles.form__container}>
                    <div className={poppins.className}>
                    <div className={loginStyles.formTitle}>Inicia sesión</div>
                        <form className={loginStyles.formBody} onSubmit={signIn}>
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} ref={recaptchaRef as any} size="invisible" />
                            <div className={loginStyles.formGroup}>
                                <label htmlFor="email">Correo electrónico</label>
                                <input type="email" name="email" className={loginStyles.formInput} />
                            </div>
                            <div className={loginStyles.formGroup}>
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" name="password" className={loginStyles.formInput} />
                            </div>
                            <div className={loginStyles.formGroup}>
                                <button type="submit" className={loginStyles.formButton}>Iniciar sesión</button>
                            </div>
                            <div className={loginStyles.formNetworks}>
                                <Link href="#" onClick={signInWithSocialNetworks}>
                                <div className={loginStyles.formNetwork}>
                                    <Image src="/images/items/google_logo.png" alt="Google" height={20} width={23} className={loginStyles.formNetwork__image} />
                                    <span>Iniciar sesión con Google</span>
                                </div>
                                </Link>
                                <Link href="#">
                                <div className={loginStyles.formNetwork} onClick={signInWithSocialNetworks}>
                                    <Image src="/images/items/facebook_logo.png" alt="Facebook" height={20} width={23} className={loginStyles.formNetwork__image} />
                                    <span>Iniciar sesión con Facebook</span>
                                </div>
                                </Link>
    
                                <Link href="#">
                                <div className={loginStyles.formNetwork} onClick={signInWithSocialNetworks}>
                                    <Image src="/images/items/github_logo.png" alt="Github" height={26} width={26} className={loginStyles.formNetwork__image} />
                                    <span>Iniciar sesión con Github</span>
                                    </div>
                                    </Link>
                            </div>
                        </form>
                        <div className={loginStyles.formFooter}>
                            <p className={loginStyles.registerText}>¿No tienes una cuenta?</p>
                            <Link href="/auth/register" className={loginStyles.registerButton}>Regístrate</Link>
                        </div>
                        </div>
                    </div>
                    </main>
                    </div>               
            </div>
        );

    
}

export default Login;