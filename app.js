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
    },
    // 员工信息
    staffInfo: null,
    isStaffLogin: false,
    // 员工名片信息（C端展示）
    staffCard: {
      avatar: '',
      name: '销售顾问',
      phone: '',
      wechat: '',
      brand: 'XX品牌',
      shop: 'XX汽车4S店',
      position: '高级销售顾问',
      years: 5,
      tags: ['试驾体验控', '成交效率王'],
      highlights: ['专业服务', '诚信经营'],
      motto: '用心服务每一位客户',
      honors: []
    },
    // 线索数据
    leads: [],
    // 数据埋点
    analytics: {
      pv: 0,
      uv: 0,
      shareCount: 0,
      leadCount: 0,
      callCount: 0
    }
  }
})

