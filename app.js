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
      latitude: 0,
      longitude: 0,
      businessHours: '09:00-18:00',
      wechat: 'wechat_number'
    }
  }
})

