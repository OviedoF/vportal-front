import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function terminos({ }) {

    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            textAlign: 'center',
            backgroundColor: '#fff',
            background: 'rgb(0,0,0)',
            background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, var(--color-alternative) 0%, var(--color-alternative-variant) 100%)'
        }}>
            <h1>¡Hola! Será un placer trabajar con ústed!</h1>

            <h2 style={{marginTop: 40}}>Le paso esta página para hacerle saber que ví la página de fundas que me envió, y también estoy muy interesado en empezar cuanto antes! Sólo necesito que me hable a mi número para empezar porque por Freelancer sufrí un baneo injusto y terminé perdiendo toda la paga que me dieron, muchas gracias y disculpe las molestias!</h2>

            <h2 style={{marginTop: 40}}>Mi número es: +543492621665</h2>

            <style jsx>{`
            main {
                overflow: hidden;
            }
        `}</style>
        </main>
    )
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home'])),
        },
    }
}