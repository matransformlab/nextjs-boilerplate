'use client'

import { useEffect, useRef } from 'react'
import { CountUp } from 'countup.js'
import Image from 'next/image'

const stats = [
  { 
    id: 'systems', 
    value: 750, 
    label: 'Human Systems Optimized', 
    gradientClass: 'gradient-text-purple-gold',
    suffix: '+'
  },
  { 
    id: 'businesses', 
    value: 28, 
    label: 'Businesses Launched', 
    gradientClass: 'gradient-text-blue-gold',
    suffix: '+'
  },
  { 
    id: 'experience', 
    value: 15, 
    label: 'Years Experience', 
    gradientClass: 'gradient-text-green-gold',
    suffix: '+'
  },
  { 
    id: 'continents', 
    value: 5, 
    label: 'Continents', 
    gradientClass: 'gradient-text-orange-purple',
    suffix: ''
  },
]

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat) => {
              const element = document.getElementById(stat.id)
              if (element && !element.dataset.counted) {
                element.dataset.counted = 'true'
                
                const countUp = new CountUp(element, stat.value, {
                  duration: 2, // 2 seconds total
                  useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  suffix: stat.suffix,
                })
                
                if (!countUp.error) {
                  countUp.start()
                }
              }
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6">
          <span className="bg-gradient-to-r from-purple-royal via-gold-primary to-blue-primary bg-clip-text text-transparent">
            Transform Your Sovereignty
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Next-generation human systems optimization. AI-powered transformation for sovereign individuals and businesses.
        </p>

        {/* Trust Badge */}
        <div className="trust-badge mb-12">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span>5 Continents</span>
            <span className="text-purple-royal text-2xl">•</span>
            <span>Canada</span>
            <span className="text-blue-primary text-2xl">•</span>
            <span>UK</span>
            <span className="text-green-emerald text-2xl">•</span>
            <span>Europe</span>
            <span className="text-orange-primary text-2xl">•</span>
            <span>East Africa</span>
            <span className="text-purple-royal text-2xl">•</span>
            <span>Digital Worldwide</span>
          </div>
        </div>

        {/* Animated Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.id} className="glass-panel rounded-2xl p-6 transform hover:scale-105 transition">
              <div 
                id={stat.id}
                className={`text-4xl md:text-5xl font-bold mb-2 ${stat.gradientClass}`}
              >
                0
              </div>
              <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#transformation"
            className="gumroad-button bg-gradient-to-r from-purple-royal to-gold-primary text-black-pure px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
          >
            Start Your Transformation
          </a>
          <a 
            href="#products"
            className="glass-panel px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition"
          >
            Explore Products
          </a>
        </div>
      </div>
    </div>
  )
}
