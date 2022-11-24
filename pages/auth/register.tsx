import Head from "next/head";
import loginStyles from "../../styles/auth/auth.module.css";
import { Poppins } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import ReCaptcha from 'react-google-recaptcha'
import { AnalyticsScript } from "..";
import { AuthProvider, browserPopupRedirectResolver, createUserWithEmailAndPassword, FacebookAuthProvider, getRedirectResult, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signInWithRedirect, UserCredential } from "firebase/auth";
import { useAuth } from "reactfire";
import { useRouter } from "next/router";
import { createRef } from "react";

const poppins = Poppins({
    preload: true,
    style: "normal",
    weight: "700",
    subsets: ["latin"],
    fallback: ["Helvetica"]
});


function register(params: any) {

    const auth = useAuth();
    const router = useRouter();
    const recaptchaRef = createRef();
    async function showError(e: any) {
        const title = document.getElementsByTagName("label");
        const inputs = document.getElementsByTagName("input");
        const button = document.getElementsByTagName("button");

        title.item(0)!.innerHTML = e;
        title.item(0)!.style.color = "#ff4a4a";
        inputs.item(0)!.style.transition = "all 0.5s ease-in-out";
        inputs.item(0)!.style.borderColor = "#ff00007a";
        inputs.item(1)!.style.transition = "all 0.5s ease-in-out";
        inputs.item(1)!.style.borderColor = "#ff00007a";
        button.item(0)!.setAttribute("disabled", "true");
        button.item(0)!.style.cursor = "not-allowed";
        
        enableButton(e);
}   
    async function signUp(e: any) {
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!(email || password)) return showError("Debes de llenar todos los campos");

        try {

           const data = await createUserWithEmailAndPassword(auth, email, password);

           // TODO: Redirect to dashboard
            return data;
        } catch (error: any) {
           if (String(error.message).includes("auth/email-already-in-use")) return showError("El correo electrónico ya está en uso");
           if (String(error.message).includes("auth/invalid-email")) return showError("El correo electrónico no es válido");
           if (String(error.message).includes("auth/weak-password")) return showError("La contraseña es muy débil, intenta con una más segura");

            return showError("Ha ocurrido un error desconocido, intenta de nuevo más tarde.");
        }
    }

    async function signUpAndGoToDashboard(e: any) {
        e.preventDefault();
        const data = await signUp(e);

        if (data) {
            router.push("/dashboard");
        }        
    }
    async function enableButton(e: any) {

        const typing = document.addEventListener("keyup", (e: any) => {
            if (e.target.value.length > 0) {
                const button = document.getElementsByTagName("button");
                button.item(0)!.removeAttribute("disabled");
                button.item(0)!.style.pointerEvents = "all";
                button.item(0)!.style.cursor = "pointer";
        }});

        const button = document.querySelector("button");
        if (e.target?.value?.length > 0) {
            button?.removeAttribute("disabled");
        }
    }
    async function signInWithSocialNetworks(e: any) {
        e.preventDefault();

        var provider; 
        const href = e.target?.children[0]?.alt ?? e.target.textContent;

        const google = new GoogleAuthProvider();
        const facebook = new FacebookAuthProvider();
        const github = new GithubAuthProvider();

        if (href.includes("Google")) provider = google;
        if (href.includes("Facebook")) provider = facebook;
        if (href.includes("Github")) provider = github;

        try {
            const data = await signInWithPopup(auth, provider as AuthProvider, browserPopupRedirectResolver);
            const user = data.user;

            const classWithoutFunction = provider?.constructor
            // @ts-ignore
            const credential = classWithoutFunction?.credentialFromResult(data);
            const token = credential?.accessToken;

            if (token) {
                router.push("/dashboard");
            }

            if (!token) {
                return showError("Ha ocurrido un error desconocido, intenta de nuevo más tarde.");
            }
        }
        catch (error: any) {
            if (error.message.includes("auth/popup-closed-by-user")) return showError("Debes de aceptar los permisos para poder iniciar sesión");
            if (error.message.includes("auth/account-exists-with-different-credential")) return showError("Ya existe una cuenta con este correo electrónico");
            if (error.message.includes("auth/operation-not-allowed")) return showError("Ha ocurrido un error desconocido, intenta de nuevo más tarde.");
            if (error.message.includes("auth/user-disabled")) return showError("Esta cuenta ha sido deshabilitada");

            return showError(error.message);
        }
    }

    if (!auth?.currentUser) {
        return (
            <div>
                <Head>
                    <title>Registrarse</title>
                    <meta name="description" content="Registrarse en Sketchia." />
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
                    <div className={loginStyles.formTitle}>Regístrate</div>
                        <form className={loginStyles.formBody} onSubmit={signUpAndGoToDashboard}>
                            <ReCaptcha sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string} ref={recaptchaRef as any} size="invisible" />
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
                            <Link className={loginStyles.formNetworkButton} onClick={signInWithSocialNetworks} href="google">
                                <div className={loginStyles.formNetwork}>
                                    <Image src="/images/items/google_logo.png" alt="Google" height={20} width={23} className={loginStyles.formNetwork__image} />
                                    <span>Regístrate con Google</span>
                                    </div>
                                    </Link>
                                <Link href="facebook" onClick={signInWithSocialNetworks}>
                                <div className={loginStyles.formNetwork}>
                                    <Image src="/images/items/facebook_logo.png" alt="Facebook" height={20} width={23} className={loginStyles.formNetwork__image} />
                                    <span>Regístrate con Facebook</span>
                                </div>
                                </Link>
    
                                <Link href="github" onClick={signInWithSocialNetworks}>
                                <div className={loginStyles.formNetwork}>
                                    <Image src="/images/items/github_logo.png" alt="Github" height={20} width={26} className={loginStyles.formNetwork__image} />
                                    <span>Regístrate con Github</span>
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
                    </div>
                   
        );
    } else {
        router.push("/dashboard");
    }
}

export default register;