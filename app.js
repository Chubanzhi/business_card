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
      // ⚠️ 重要：必须配置实际的店铺坐标，否则导航功能将无法使用
      // 获取坐标方法：
      // 1. 使用腾讯地图API：https://lbs.qq.com/service/geocode/geocode
      // 2. 在地图应用中搜索地址，获取坐标
      // 3. 使用坐标拾取工具：https://lbs.qq.com/tool/getpoint/
      latitude: null,  // 请替换为实际店铺纬度（例如：39.9042）
      longitude: null,  // 请替换为实际店铺经度（例如：116.4074）
      businessHours: '09:00-18:00',
      wechat: 'wechat_number'
    }
  }
})

