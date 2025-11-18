import React, { useState } from 'react'
import { Eye, ExternalLink } from 'lucide-react'

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Galaxy Desk Lam',
      category: 'Lighting',
      description: 'Soft gradient lighting effect for your workspace',
      image: new URL('../public/images/Denban.png.png', import.meta.url).href,
    },
    {
      id: 2,
      name: 'Aurora Vase',
      category: 'Home Decor',
      description: 'Striking gradient patterns, perfect for a modern living room',
      image: new URL('../public/images/binhhoa.png.png', import.meta.url).href,
    },
    {
      id: 3,
      name: 'Nebula Plant Pot',
      category: 'Home Decor',
      description: 'Unique honeycomb design to highlight any plant',
      image: new URL('../public/images/chauhoa.png.png', import.meta.url).href,
    },
    {
      id: 4,
      name: 'Orbit Hook',
      category: 'Accessories',
      description: 'Utility meets aesthetics for your home entrance',
      image: new URL('../public/images/moctreo.png.png', import.meta.url).href,
    },
    {
      id: 5,
      name: 'Celestial Stand',
      category: 'Accessories',
      description: 'Keep your belongings tidy with a futuristic design',
      image: new URL('../public/images/giado.png.png', import.meta.url).href,
    },
    {
      id: 6,
      name: 'Cosmos Wall Art',
      category: 'Art',
      description: '3D block shape adds depth to large wall art',
      image: new URL('../public/images/tranh.png.png', import.meta.url).href,
    },
  ]

  return (
    <section
      id="gallery"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of custom 3D printed creations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wide">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {product.description}
                    </p>
                    <button className="bg-secondary text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all flex items-center gap-2">
                      View Details
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

