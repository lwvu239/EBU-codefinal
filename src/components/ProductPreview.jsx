import React, { useState, useRef, useEffect } from 'react'
import { RotateCw, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

const ProductPreview = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - rotation.y,
      y: e.clientY - rotation.x,
    })
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return
      setRotation({
        x: e.clientY - dragStart.y,
        y: e.clientX - dragStart.x,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragStart])

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5))
  }

  const handleReset = () => {
    setRotation({ x: 0, y: 0 })
    setZoom(1)
  }

  return (
    <section
      id="preview"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            3D <span className="text-primary">Preview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rotate and zoom to see your product from every angle
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Preview Container */}
            <div
              ref={containerRef}
              className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-2xl overflow-hidden mb-6"
              style={{ height: '500px' }}
              onMouseDown={handleMouseDown}
            >
              {/* 3D Product Preview */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
                style={{
                  transform: `perspective(1000px) rotateX(${rotation.x * 0.5}deg) rotateY(${rotation.y * 0.5}deg) scale(${zoom})`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                }}
              >
                {/* 3D Product Mockup */}
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Main Product Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-secondary rounded-3xl shadow-2xl transform rotate-12">
                    <div className="absolute inset-4 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl"></div>
                    <div className="absolute top-8 left-8 w-16 h-16 bg-white/40 rounded-full blur-xl"></div>
                    <div className="absolute bottom-8 right-8 w-24 h-24 bg-secondary/40 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
                </div>
              </div>

              {/* Instructions Overlay */}
              {!isDragging && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  Click and drag to rotate
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Zoom Controls */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-2">
                <button
                  onClick={handleZoomOut}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5 text-gray-700" />
                </button>
                <span className="px-4 text-gray-700 font-semibold min-w-[80px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all transform hover:scale-105"
              >
                <RotateCcw className="w-5 h-5" />
                Reset View
              </button>

              {/* Rotation Indicators */}
              <div className="flex items-center gap-2 text-gray-600">
                <RotateCw className="w-5 h-5" />
                <span className="text-sm">
                  X: {Math.round(rotation.x)}° Y: {Math.round(rotation.y)}°
                </span>
              </div>
            </div>

            {/* Touch Instructions for Mobile */}
            <div className="mt-6 text-center text-gray-500 text-sm md:hidden">
              Touch and drag to rotate • Pinch to zoom
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPreview

