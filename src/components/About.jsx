import React from 'react'
import { Target, Zap, Heart } from 'lucide-react'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-primary">VibePrint</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We specialize in creating custom 3D printed decorations that reflect
            your unique style and personality. Our mission is to make
            personalized design accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 slide-in-left">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800">
                Your Vision, Our Technology
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At VibePrint, we combine cutting-edge 3D printing technology
                with creative design expertise to bring your ideas to life.
                Whether you're looking for unique home decor, personalized gifts,
                or custom accessories, we've got you covered.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of designers and engineers work closely with you to
                ensure every detail is perfect. From initial concept to final
                product, we're committed to delivering quality and satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration Placeholder */}
          <div className="slide-in-right">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-6 -z-10"></div>
              <div className="text-center">
                <Zap className="w-24 h-24 text-primary mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-lg">
                  3D Printing Process
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  From design to finished product
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-all transform hover:scale-105">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
            <p className="text-gray-600">
              To democratize custom design and make personalized 3D printing
              accessible to everyone.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-lg transition-all transform hover:scale-105">
            <Zap className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Our Technology</h4>
            <p className="text-gray-600">
              State-of-the-art 3D printers and premium materials for the best
              quality results.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 hover:shadow-lg transition-all transform hover:scale-105">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Personalization</h4>
            <p className="text-gray-600">
              Every product is unique, crafted with care to match your vision
              and style.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

