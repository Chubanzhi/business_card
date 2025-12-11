// pages/cars/cars.js
Page({
  data: {
    cars: [],
    loading: false
  },

  onLoad() {
    this.loadCars()
  },

  // 加载车型列表
  loadCars() {
    this.setData({ loading: true })
    // TODO: 从服务器加载车型数据
    setTimeout(() => {
      this.setData({
        cars: [],
        loading: false
      })
    }, 500)
  },

  // 查看车型详情
  viewCarDetail(e) {
    const carId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/car-detail/car-detail?id=${carId}`
    })
  }
})

