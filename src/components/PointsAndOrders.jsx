import React, { useState } from 'react'
import { Star, Package, Truck, CheckCircle, Clock, Gift } from 'lucide-react'

const PointsAndOrders = () => {
  const [activeTab, setActiveTab] = useState('points')

  // Mock data
  const userPoints = 1250
  const pointsHistory = [
    { id: 1, date: '2024-01-15', points: 100, description: 'Đặt hàng #12345', type: 'earned' },
    { id: 2, date: '2024-01-10', points: 50, description: 'Đánh giá sản phẩm', type: 'earned' },
    { id: 3, date: '2024-01-05', points: -200, description: 'Đổi ưu đãi giảm 20,000 VNĐ', type: 'redeemed' },
    { id: 4, date: '2023-12-28', points: 150, description: 'Đặt hàng #12340', type: 'earned' },
  ]

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'delivered',
      statusText: 'Đã giao hàng',
      items: ['3D Lamp - Custom Design', 'Nameplate - Office'],
      total: 530000,
      tracking: 'VN123456789',
    },
    {
      id: 'ORD-002',
      date: '2024-01-20',
      status: 'shipping',
      statusText: 'Đang vận chuyển',
      items: ['Figurine - Character Model'],
      total: 250000,
      tracking: 'VN987654321',
    },
    {
      id: 'ORD-003',
      date: '2024-01-22',
      status: 'processing',
      statusText: 'Đang xử lý',
      items: ['Keycap Set - Custom Design'],
      total: 180000,
      tracking: null,
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'shipping':
        return <Truck className="w-5 h-5 text-blue-500" />
      case 'processing':
        return <Clock className="w-5 h-5 text-orange-500" />
      default:
        return <Package className="w-5 h-5 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-700 border-green-300'
      case 'shipping':
        return 'bg-blue-100 text-blue-700 border-blue-300'
      case 'processing':
        return 'bg-orange-100 text-orange-700 border-orange-300'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  return (
    <section
      id="points-orders"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Points & <span className="text-primary">Orders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tích điểm và theo dõi đơn hàng của bạn
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-2 shadow-lg inline-flex gap-2">
              <button
                onClick={() => setActiveTab('points')}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'points'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Star className="w-5 h-5" />
                Điểm tích lũy
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'orders'
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Package className="w-5 h-5" />
                Đơn hàng
              </button>
            </div>
          </div>

          {/* Points Tab */}
          {activeTab === 'points' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 fade-in">
              {/* Points Summary */}
              <div className="bg-gradient-to-br from-primary via-blue-600 to-secondary rounded-2xl p-8 mb-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/80 mb-2">Điểm tích lũy hiện tại</p>
                    <h3 className="text-5xl font-bold">{userPoints.toLocaleString()}</h3>
                  </div>
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="border-t border-white/30 pt-4">
                  <p className="text-sm text-white/80">
                    1 điểm = 100 VNĐ • Đổi điểm để nhận ưu đãi
                  </p>
                </div>
              </div>

              {/* Points Benefits */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
                  <Gift className="w-8 h-8 text-orange-600 mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2">100 điểm</h4>
                  <p className="text-sm text-gray-600">Giảm 10,000 VNĐ</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                  <Gift className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2">500 điểm</h4>
                  <p className="text-sm text-gray-600">Giảm 50,000 VNĐ</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                  <Gift className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2">1000 điểm</h4>
                  <p className="text-sm text-gray-600">Giảm 100,000 VNĐ</p>
                </div>
              </div>

              {/* Points History */}
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-6">
                  Lịch sử tích điểm
                </h4>
                <div className="space-y-4">
                  {pointsHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            item.type === 'earned'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-orange-100 text-orange-600'
                          }`}
                        >
                          {item.type === 'earned' ? (
                            <Star className="w-6 h-6" />
                          ) : (
                            <Gift className="w-6 h-6" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {item.description}
                          </p>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <div
                        className={`font-bold text-lg ${
                          item.type === 'earned' ? 'text-green-600' : 'text-orange-600'
                        }`}
                      >
                        {item.type === 'earned' ? '+' : ''}
                        {item.points} điểm
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-6 fade-in">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-800">
                          {order.id}
                        </h3>
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-semibold border-2 flex items-center gap-2 ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {getStatusIcon(order.status)}
                          {order.statusText}
                        </span>
                      </div>
                      <p className="text-gray-500">Ngày đặt: {order.date}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-2xl font-bold text-primary">
                        {order.total.toLocaleString()} VNĐ
                      </p>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-6">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Sản phẩm:
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {order.items.map((item, index) => (
                        <li key={index} className="text-gray-600 flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {order.tracking && (
                      <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Truck className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-gray-800">
                            Mã vận đơn:
                          </span>
                          <span className="font-mono text-blue-600">
                            {order.tracking}
                          </span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                          Theo dõi đơn hàng →
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PointsAndOrders


