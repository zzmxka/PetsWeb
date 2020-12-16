// pages/person/person.js
Page({
  info: function() {
    // 保留当前页面，点击页面左上角箭头，返回上一个页面
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
})