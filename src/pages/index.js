import About from '@/components/main/About'
import Hero from '@/components/main/Hero'
import React from 'react'

export default function index() {
  return (
    <main>
        <Hero />
        <About />

        <style jsx>{`
            main {
                
            }
        `}</style>
    </main>
  )
}
