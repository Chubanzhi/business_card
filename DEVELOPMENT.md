# 开发指南

## 项目结构说明

```
business_card/
├── app.js                 # 小程序入口文件
├── app.json              # 小程序全局配置
├── app.wxss              # 小程序全局样式
├── project.config.json   # 项目配置文件
├── sitemap.json         # 站点地图配置
├── pages/               # 页面目录
│   ├── index/          # 首页
│   ├── shop/           # 店铺详情页
│   ├── services/       # 服务项目页
│   ├── cars/           # 车型列表页
│   ├── car-detail/     # 车型详情页
│   ├── activities/     # 优惠活动页
│   ├── booking/        # 预约页面
│   ├── booking-list/   # 预约记录页
│   ├── profile/        # 个人中心
│   └── contact/        # 联系方式页
├── components/         # 组件目录（待创建）
├── utils/             # 工具函数目录（待创建）
├── images/            # 图片资源目录（待创建）
└── README.md          # 项目说明文档
```

## 开发环境准备

1. **安装微信开发者工具**
   - 下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
   - 安装并登录微信开发者账号

2. **注册小程序账号**
   - 访问：https://mp.weixin.qq.com/
   - 注册小程序账号并获取 AppID

3. **配置项目**
   - 打开微信开发者工具
   - 导入项目，选择当前目录
   - 在 `project.config.json` 中配置您的 AppID

## 开发步骤

### 第一阶段：基础功能开发

1. **完善首页功能**
   - [ ] 实现轮播图数据加载
   - [ ] 实现热门车型展示
   - [ ] 实现优惠活动展示
   - [ ] 优化UI样式

2. **完善店铺详情页**
   - [ ] 添加店铺实景图片展示
   - [ ] 实现地图导航功能
   - [ ] 实现联系方式功能

3. **创建其他基础页面**
   - [ ] 服务项目页面
   - [ ] 车型列表和详情页
   - [ ] 优惠活动页面
   - [ ] 预约功能页面
   - [ ] 个人中心页面

### 第二阶段：数据对接

1. **后端接口开发**（如果使用自建后端）
   - [ ] 店铺信息接口
   - [ ] 车型数据接口
   - [ ] 服务项目接口
   - [ ] 预约接口

2. **或使用微信云开发**
   - [ ] 创建云数据库
   - [ ] 创建云函数
   - [ ] 配置云存储

### 第三阶段：功能完善

1. **预约功能**
   - [ ] 预约表单验证
   - [ ] 预约数据提交
   - [ ] 预约记录查询

2. **用户功能**
   - [ ] 用户登录
   - [ ] 收藏功能
   - [ ] 优惠券管理

### 第四阶段：优化与测试

1. **性能优化**
   - [ ] 图片懒加载
   - [ ] 数据缓存
   - [ ] 代码分包

2. **测试**
   - [ ] 功能测试
   - [ ] 兼容性测试
   - [ ] 性能测试

3. **上线准备**
   - [ ] 完善小程序信息
   - [ ] 准备审核材料
   - [ ] 提交审核

## 开发规范

### 代码规范
- 使用 2 空格缩进
- 变量命名使用驼峰命名法
- 函数命名使用动词开头
- 添加必要的注释

### 文件命名规范
- 页面文件：小写字母，多个单词用连字符连接（如：car-detail）
- 组件文件：PascalCase（如：CarCard）
- 工具函数：camelCase（如：formatDate）

### 样式规范
- 使用 rpx 作为单位（响应式像素）
- 颜色值使用十六进制或 rgba
- 遵循 BEM 命名规范（可选）

## 常用 API

### 微信小程序 API
- `wx.request()` - 网络请求
- `wx.navigateTo()` - 页面跳转
- `wx.makePhoneCall()` - 拨打电话
- `wx.openLocation()` - 打开地图
- `wx.setClipboardData()` - 复制到剪贴板
- `wx.getLocation()` - 获取位置信息

### 地图相关
- `map` 组件 - 地图展示
- `cover-view` - 地图覆盖物

## 注意事项

1. **小程序限制**
   - 单个包大小不超过 2MB
   - 总包大小不超过 20MB（使用分包）
   - 网络请求域名需要配置

2. **用户体验**
   - 加载状态提示
   - 错误信息提示
   - 空状态展示

3. **数据安全**
   - 敏感信息不要放在前端
   - 使用 HTTPS 请求
   - 做好数据验证

## 参考资源

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [微信小程序 API 文档](https://developers.weixin.qq.com/miniprogram/dev/api/)
- [微信小程序设计指南](https://developers.weixin.qq.com/miniprogram/design/)

