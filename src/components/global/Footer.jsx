import React from 'react'

export default function Footer() {
  return (
    <footer>
        <p> 
        Todos los derechos reservados &copy; {new Date().getFullYear()} - VPortal 
        </p>

        <style jsx>{`
            footer {
                margin: 0px 0px 50px 0px;
                padding: 20px var(--padding-sections-horizontal);

            }

            p {
                text-align: center;
            }
        `}</style>
    </footer>
  )
}
