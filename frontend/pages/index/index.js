// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    mask_show: true,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    code: [],
    banner:1,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoAdmin() {
    wx.navigateTo({
      url: '../admin_verify/admin_verify'
    })
  },
  gotoBook() {
    wx.navigateTo({
      url: '../book2/book2'
    })
  },
  gotomyBooks(){
    wx.navigateTo({
      url: '../mybooks/mybooks'
    })
  },
  onLoad: function () {
      var i=Math.ceil(Math.random()*7)
      this.setData({
        banner:i
      })
  },
})