import About from '@/components/main/About'
import Connected from '@/components/main/Connected'
import Hero from '@/components/main/Hero'
import HabilitiesSection from '@/components/main/habilities/HabilitiesSection'
import TecnologiesSection from '@/components/main/tecnologies/TecnologiesSection'
import React from 'react'

export default function index() {
  return (
    <main>
        <Hero />
        <About />
        <Connected />
        <HabilitiesSection />
        <TecnologiesSection />

        <style jsx>{`
            main {
                
            }
        `}</style>
    </main>
  )
}
