import React, { useState } from 'react'
import { Eye, ExternalLink } from 'lucide-react'

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const products = [
    {
      id: 1,
      name: 'Custom Desk Lamp',
      category: 'Lighting',
      description: 'Personalized desk lamp with your name engraved',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    },
    {
      id: 2,
      name: '3D Printed Vase',
      category: 'Home Decor',
      description: 'Modern geometric vase for your living space',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500',
    },
    {
      id: 3,
      name: 'Custom Phone Stand',
      category: 'Accessories',
      description: 'Ergonomic phone stand with unique design',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
    },
    {
      id: 4,
      name: 'Wall Art Sculpture',
      category: 'Art',
      description: 'Abstract 3D wall art piece',
      image: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=500',
    },
    {
      id: 5,
      name: 'Custom Key Holder',
      category: 'Accessories',
      description: 'Personalized key holder with your design',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
    },
    {
      id: 6,
      name: 'Plant Pot Set',
      category: 'Home Decor',
      description: 'Set of modern geometric plant pots',
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500',
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
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Eye className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600 font-semibold">{product.name}</p>
                  </div>
                </div>

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

