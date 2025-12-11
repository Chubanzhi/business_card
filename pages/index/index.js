// pages/index/index.js
Page({
  data: {
    shopInfo: {},
    bannerImages: [],
    hotCars: [],
    services: [],
    activities: []
  },

  onLoad() {
    this.loadShopInfo()
    this.loadBannerImages()
    this.loadHotCars()
    this.loadServices()
    this.loadActivities()
  },

  // 加载店铺信息
  loadShopInfo() {
    const app = getApp()
    this.setData({
      shopInfo: app.globalData.shopInfo
    })
  },

  // 加载轮播图
  loadBannerImages() {
    // TODO: 从服务器获取轮播图数据
    this.setData({
      bannerImages: [
        { id: 1, url: '/images/banner1.jpg' },
        { id: 2, url: '/images/banner2.jpg' },
        { id: 3, url: '/images/banner3.jpg' }
      ]
    })
  },

  // 加载热门车型
  loadHotCars() {
    // TODO: 从服务器获取热门车型数据
    this.setData({
      hotCars: []
    })
  },

  // 加载服务项目
  loadServices() {
    // TODO: 从服务器获取服务项目数据
    this.setData({
      services: [
        { id: 1, name: '新车销售', icon: '/images/service1.png' },
        { id: 2, name: '维修保养', icon: '/images/service2.png' },
        { id: 3, name: '二手车', icon: '/images/service3.png' },
        { id: 4, name: '保险服务', icon: '/images/service4.png' }
      ]
    })
  },

  // 加载优惠活动
  loadActivities() {
    // TODO: 从服务器获取优惠活动数据
    this.setData({
      activities: []
    })
  },

  // 拨打电话
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.shopInfo.phone
    })
  },

  // 查看店铺详情
  viewShopDetail() {
    wx.navigateTo({
      url: '/pages/shop/shop'
    })
  },

  // 查看车型列表
  viewCars() {
    wx.switchTab({
      url: '/pages/cars/cars'
    })
  },

  // 查看服务列表
  viewServices() {
    wx.switchTab({
      url: '/pages/services/services'
    })
  },

  // 查看优惠活动
  viewActivities() {
    wx.navigateTo({
      url: '/pages/activities/activities'
    })
  }
})

