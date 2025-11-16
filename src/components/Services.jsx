import React from 'react'
import { Lightbulb, User, FileText, Keyboard } from 'lucide-react'

const Services = () => {
  const categories = [
    {
      icon: Lightbulb,
      title: '3D Lamp',
      description:
        'Custom 3D printed lamps with personalized designs. Create unique lighting solutions that match your style and space.',
      color: 'primary',
    },
    {
      icon: User,
      title: 'Figurine',
      description:
        'Detailed 3D printed figurines and collectibles. Perfect for gifts, decorations, or personal collections.',
      color: 'secondary',
    },
    {
      icon: FileText,
      title: 'Nameplate',
      description:
        'Personalized nameplates and signage. Professional quality for offices, homes, or special occasions.',
      color: 'primary',
    },
    {
      icon: Keyboard,
      title: 'Keycap',
      description:
        'Custom mechanical keyboard keycaps. Unique designs to personalize your keyboard setup.',
      color: 'secondary',
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Product <span className="text-primary">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our range of customizable 3D printed products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                    category.color === 'primary'
                      ? 'bg-gradient-to-br from-primary to-blue-600'
                      : 'bg-gradient-to-br from-secondary to-orange-600'
                  }`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {category.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

