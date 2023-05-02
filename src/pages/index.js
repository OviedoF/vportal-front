import About from '@/components/main/About'
import Connected from '@/components/main/Connected'
import Hero from '@/components/main/Hero'
import React from 'react'

export default function index() {
  return (
    <main>
        <Hero />
        <About />
        <Connected />

        <style jsx>{`
            main {
                
            }
        `}</style>
    </main>
  )
}
