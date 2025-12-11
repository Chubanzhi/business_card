// pages/services/services.js
Page({
  data: {
    services: [
      {
        id: 1,
        name: '新车销售',
        icon: '🚗',
        desc: '提供各类品牌新车销售服务',
        price: '面议'
      },
      {
        id: 2,
        name: '维修保养',
        icon: '🔧',
        desc: '专业维修保养服务',
        price: '面议'
      },
      {
        id: 3,
        name: '二手车',
        icon: '🔄',
        desc: '二手车评估、置换、销售',
        price: '面议'
      },
      {
        id: 4,
        name: '保险服务',
        icon: '🛡️',
        desc: '车辆保险咨询与办理',
        price: '面议'
      },
      {
        id: 5,
        name: '金融贷款',
        icon: '💰',
        desc: '购车金融贷款服务',
        price: '面议'
      },
      {
        id: 6,
        name: '上牌服务',
        icon: '📋',
        desc: '车辆上牌代办服务',
        price: '面议'
      }
    ]
  },

  onLoad() {
    // TODO: 从服务器加载服务数据
  },

  // 查看服务详情
  viewServiceDetail(e) {
    const serviceId = e.currentTarget.dataset.id
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    })
  },

  // 预约服务
  bookService(e) {
    const serviceId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/booking/booking?type=service&id=${serviceId}`
    })
  }
})

