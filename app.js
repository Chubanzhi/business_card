// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res.code)
      }
    })
  },
  globalData: {
    userInfo: null,
    shopInfo: {
      name: 'XX汽车4S店',
      phone: '400-XXX-XXXX',
      address: 'XX市XX区XX路XX号',
      // TODO: 请替换为实际的店铺坐标（可通过地图API或地图工具获取）
      latitude: 39.9042,  // 示例：北京市中心坐标，请替换为实际坐标
      longitude: 116.4074,  // 示例：北京市中心坐标，请替换为实际坐标
      businessHours: '09:00-18:00',
      wechat: 'wechat_number'
    }
  }
})

