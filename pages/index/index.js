//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tabItem:0,
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true,
      },
      {
        id:1,
        name:"同城",
        isActive:false,
      },
      {
        id:2,
        name:"狗狗",
        isActive:false,
      },
      {
        id:3,
        name:"猫咪",
        isActive:false,
      },
    ],
    list:[
      {
        id:0,
        name:'旺财妈妈',
        img:'https://goss1.veer.com/creative/vcg/veer/612/veer-135553297.jpg',
        time:'2020/11/30 11:12:10',
        Phone:'iPhone XS Max',
        img1:'https://goss2.veer.com/creative/vcg/veer/612/veer-153481797.jpg',
        size:'我叫旺财，初来乍到，请多关照！',
        size1:'我是一家三口最大的哟，快看我，可不可爱！',
        img2:'../images/Pl.png',
        img3:'../images/Dz.png',
        img4:'../images/Lj.png'
      },
      {
        id:1,
        name:'小花妈妈',
        img:'http://5b0988e595225.cdn.sohucs.com/images/20180625/fea477a5e5b64805a8e2fd6be1199cf5.jpeg',
        time:'2020/11/30 11:12:10',
        Phone:'来自iPhone(4G)',
        img1:'http://5b0988e595225.cdn.sohucs.com/images/20180625/fea477a5e5b64805a8e2fd6be1199cf5.jpeg',
        size:'我叫小花，初来乍到，请多关照！',
        size1:'新的一天也要像我一样快乐哟！',
        img2:'../images/Pl.png',
        img3:'../images/Dz.png',
        img4:'../images/Lj.png'
      },
    ],
   
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getTap(e){
    this.setData({
      tabItem:e.currentTarget.dataset.id
    })
  },
})
