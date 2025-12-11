// pages/shop/shop.js
Page({
  data: {
    shopInfo: {},
    images: []
  },

  onLoad() {
    const app = getApp()
    this.setData({
      shopInfo: app.globalData.shopInfo
    })
    this.loadShopImages()
  },

  loadShopImages() {
    // TODO: 从服务器获取店铺实景图片
    this.setData({
      images: []
    })
  },

  // 拨打电话
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.shopInfo.phone
    })
  },

  // 复制微信号
  copyWechat() {
    wx.setClipboardData({
      data: this.data.shopInfo.wechat,
      success: () => {
        wx.showToast({
          title: '微信号已复制',
          icon: 'success'
        })
      }
    })
  },

  // 打开地图导航
  openLocation() {
    const { latitude, longitude, name, address } = this.data.shopInfo
    
    // 检查坐标是否已配置
    if (latitude === null || longitude === null || latitude === 0 || longitude === 0) {
      wx.showModal({
        title: '提示',
        content: '店铺坐标未配置，无法使用导航功能。请联系开发者配置店铺坐标。',
        showCancel: false,
        confirmText: '知道了'
      })
      console.error('店铺坐标未配置，请在 app.js 中设置 shopInfo.latitude 和 shopInfo.longitude')
      return
    }
    
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name,
      address: address
    })
  }
})

