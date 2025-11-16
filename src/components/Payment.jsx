import React, { useState } from 'react'
import { CreditCard, Smartphone, Wallet, Check } from 'lucide-react'

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('')
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    phone: '',
  })

  const paymentMethods = [
    {
      id: 'momo',
      name: 'MoMo',
      icon: Smartphone,
      description: 'Thanh toán qua ví điện tử MoMo',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-300',
    },
    {
      id: 'zalopay',
      name: 'ZaloPay',
      icon: Wallet,
      description: 'Thanh toán qua ZaloPay',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
    },
    {
      id: 'visa',
      name: 'Visa',
      icon: CreditCard,
      description: 'Thanh toán bằng thẻ Visa',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-300',
    },
  ]

  const handlePaymentSelect = (methodId) => {
    setSelectedPayment(methodId)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanh toán qua ${paymentMethods.find(m => m.id === selectedPayment)?.name} đã được xử lý!`)
  }

  return (
    <section
      id="payment"
      className="py-20 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Online <span className="text-primary">Payment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chọn phương thức thanh toán phù hợp với bạn
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Payment Methods Selection */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Chọn phương thức thanh toán
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon
                  const isSelected = selectedPayment === method.id
                  return (
                    <button
                      key={method.id}
                      onClick={() => handlePaymentSelect(method.id)}
                      className={`p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                        isSelected
                          ? `${method.borderColor} ${method.bgColor} shadow-lg`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        {isSelected && (
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {method.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {method.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Payment Form */}
            {selectedPayment && (
              <form onSubmit={handleSubmit} className="fade-in">
                <div className="border-t-2 border-gray-200 pt-8">
                  {selectedPayment === 'visa' ? (
                    <>
                      {/* Visa Card Form */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Số thẻ
                          </label>
                          <input
                            type="text"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Tên chủ thẻ
                          </label>
                          <input
                            type="text"
                            name="cardName"
                            value={paymentInfo.cardName}
                            onChange={handleInputChange}
                            placeholder="NGUYEN VAN A"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            required
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                              Ngày hết hạn
                            </label>
                            <input
                              type="text"
                              name="expiryDate"
                              value={paymentInfo.expiryDate}
                              onChange={handleInputChange}
                              placeholder="MM/YY"
                              maxLength="5"
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                              CVV
                            </label>
                            <input
                              type="text"
                              name="cvv"
                              value={paymentInfo.cvv}
                              onChange={handleInputChange}
                              placeholder="123"
                              maxLength="3"
                              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* MoMo / ZaloPay Form */}
                      <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={paymentInfo.phone}
                          onChange={handleInputChange}
                          placeholder="0901234567"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                          required
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Số điện thoại đã đăng ký {selectedPayment === 'momo' ? 'MoMo' : 'ZaloPay'}
                        </p>
                      </div>
                    </>
                  )}

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">
                      Tóm tắt đơn hàng
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Tạm tính:</span>
                        <span>500,000 VNĐ</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phí vận chuyển:</span>
                        <span>30,000 VNĐ</span>
                      </div>
                      <div className="border-t-2 border-gray-300 pt-2 flex justify-between font-bold text-lg">
                        <span>Tổng cộng:</span>
                        <span className="text-primary">530,000 VNĐ</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    Thanh toán ngay
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment


