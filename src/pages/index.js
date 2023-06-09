import About from '@/components/main/About'
import Connected from '@/components/main/Connected'
import Hero from '@/components/main/Hero'
import Contact from '@/components/main/contact/Contact'
import HabilitiesSection from '@/components/main/habilities/HabilitiesSection'
import TecnologiesSection from '@/components/main/tecnologies/TecnologiesSection'
import React from 'react'
import { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function index({}) {
  const [hoverActive, setHoverActive] = useState(false)

  return (
    <main>
        <Hero />
        <About />
        <Connected />
        <HabilitiesSection />
        <TecnologiesSection hoverActive={hoverActive} setHoverActive={setHoverActive} />
        <Contact hoverActive={hoverActive} />

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