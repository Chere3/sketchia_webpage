import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { indexedDBLocalPersistence, initializeAuth, inMemoryPersistence } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { AuthProvider, FirebaseAppProvider } from 'reactfire';


function App({ Component, pageProps }: AppProps) {
  
const app = initializeApp({
   apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
    appId: process.env.NEXT_PUBLIC_APP_ID as string,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
});

// Is browser function
const isBrowser = () => typeof window !== "undefined";

const persistence = isBrowser() ? indexedDBLocalPersistence : inMemoryPersistence;
const auth = initializeAuth(app, { persistence });



return (
  <FirebaseAppProvider firebaseApp={app}>
    <AuthProvider sdk={auth}>
    <Component {...pageProps} />
    </AuthProvider>
  </FirebaseAppProvider>
    )
}

export default App;
