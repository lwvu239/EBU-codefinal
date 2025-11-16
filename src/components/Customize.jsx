import React, { useState } from 'react'
import { Upload, Palette, Ruler, FileText, Send } from 'lucide-react'

const Customize = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    material: '',
    color: '',
    size: '',
    designFile: null,
    requirements: '',
  })

  const materials = ['PLA', 'ABS', 'PETG', 'TPU', 'Wood PLA', 'Metal PLA']
  const colors = ['White', 'Black', 'Blue', 'Red', 'Orange', 'Green', 'Custom']
  const sizes = ['Small (5-10cm)', 'Medium (10-20cm)', 'Large (20-30cm)', 'Custom']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, designFile: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon with a quote.')
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      material: '',
      color: '',
      size: '',
      designFile: null,
      requirements: '',
    })
  }

  return (
    <section
      id="customize"
      className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Customize Your <span className="text-primary">Design</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your design or work with us to create something unique
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="+84 123 456 789"
                />
              </div>

              {/* Material */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Palette size={18} />
                  Material *
                </label>
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select Material</option>
                  {materials.map((mat) => (
                    <option key={mat} value={mat}>
                      {mat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Palette size={18} />
                  Color *
                </label>
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select Color</option>
                  {colors.map((col) => (
                    <option key={col} value={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <Ruler size={18} />
                  Size *
                </label>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select Size</option>
                  {sizes.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <Upload size={18} />
                Design File (.stl, .obj)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <input
                  type="file"
                  accept=".stl,.obj"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-primary font-semibold hover:text-blue-600"
                >
                  Click to upload
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.designFile
                    ? formData.designFile.name
                    : 'or drag and drop'}
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <FileText size={18} />
                Special Requirements
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                placeholder="Tell us about any special requirements or design preferences..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Customize

