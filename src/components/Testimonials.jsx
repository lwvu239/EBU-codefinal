import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Nguyen Van H',
      role: 'Designer',
      rating: 5,
      text: 'VibePrint đã giúp tôi tạo ra những món đồ trang trí độc đáo cho không gian làm việc. Chất lượng in 3D tuyệt vời và dịch vụ chăm sóc khách hàng rất chuyên nghiệp!',
      avatar: '👨‍💼',
    },
    {
      name: 'Tran Thi Kim H',
      role: 'Home Owner',
      rating: 5,
      text: 'Tôi đã đặt một bộ chậu cây tùy chỉnh và kết quả vượt quá mong đợi. Sản phẩm đẹp, bền và giá cả hợp lý. Sẽ quay lại đặt hàng nhiều lần nữa!',
      avatar: '👩‍💼',
    },
    {
      name: 'Luu Quang V',
      role: 'Entrepreneur',
      rating: 5,
      text: 'Dịch vụ tư vấn thiết kế rất tận tâm. Team đã giúp tôi hiện thực hóa ý tưởng từ bản phác thảo thô thành sản phẩm hoàn chỉnh. Rất hài lòng!',
      avatar: '👨‍💻',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 fade-in relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

