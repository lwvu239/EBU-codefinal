import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-purple-700 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* 3D Mockup Placeholder */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 transform rotate-6 hover:rotate-12 transition-transform duration-500 shadow-2xl">
            <div className="p-8 h-full flex items-center justify-center">
              <Sparkles className="w-32 h-32 text-white opacity-80" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-3xl backdrop-blur-sm border border-secondary/20 transform -rotate-6 -z-10 shadow-xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
            ✨ Custom 3D Printing Service
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Print your vibe {' '}
            <span className="text-secondary">Make it real</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Transform your ideas into stunning 3D decorations. From personalized
            desk accessories to custom home decor, we bring your vision to
            reality with precision and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('customize')}
              className="bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Start Designing
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all border-2 border-white/30"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

