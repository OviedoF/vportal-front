import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

        :root {
          --color-vdark: #111111;
          --color-dark: #393E46;
          --color-medium: #929AAB;
          --color-alternative: #2D46B9;
          --color-alternative-two: #FFE15D;
          --color-light: #EEEEEE;
          --color-vlight: #F7F7F7;
          --color-black: #000000;
          --color-white: #FFFFFF;
        }

        body {
          overflow-x: hidden;
          background-color: var(--color-vdark);
          color: var(--color-vlight);
          font-family: 'Roboto Slab', serif;
        }
      `}</style>
    </>
  )
}
