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
    wx.openLocation({
      latitude: this.data.shopInfo.latitude,
      longitude: this.data.shopInfo.longitude,
      name: this.data.shopInfo.name,
      address: this.data.shopInfo.address
    })
  }
})

