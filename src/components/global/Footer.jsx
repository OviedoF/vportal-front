import React from 'react'
import { useTranslation } from 'next-i18next'

export default function Footer() {
  const {t} = useTranslation('common');
  
  return (
    <footer>
        <p> 
         {t('footer.copyright')} {new Date().getFullYear()} - {t('name')}
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
