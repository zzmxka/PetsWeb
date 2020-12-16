// pages/index1/index1.js
Page({
  /**
  * 页面的初始数据
  */
  data: {
    list:[
      {
        id:0,
        name:'旺财妈妈',
        img:'https://goss1.veer.com/creative/vcg/veer/612/veer-135553297.jpg'
      },
      {
        id:1,
        name:'小花妈妈',
        img:'http://5b0988e595225.cdn.sohucs.com/images/20180625/fea477a5e5b64805a8e2fd6be1199cf5.jpeg'
      },
      {
        id:2,
        name:'小豆丁爸爸',
        img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=807036457,3846508561&fm=11&gp=0.jpg'
      },
    ],
  isActive: null,
  listMain: [],
  toView: 'inToView0',
  oHeight: [],
  },
  //点击右侧字母导航定位触发
  scrollToViewFn: function (e) {
  var that = this;
  var _id = e.target.dataset.id;
  var scrollTop = that.data.scrollTop;
  console.log('点击获取Id', _id)
  console.log('点击获取滚动距离', scrollTop)
  for (var i = 0; i < that.data.oHeight.length; i++) {
   if (that.data.oHeight[i].key === _id) {
   that.setData({
    toView: 'inToView' + that.data.oHeight[i].key
   });
   break
   }
  }
  },
  // 页面滑动时触发
  onPageScroll: function (e) {
  var that = this;
  that.setData({
   scrollTop: e.detail.scrollTop
  })
  var scrollTop = that.data.scrollTop;
  console.log(scrollTop);
  for(var i =0; i< that.data.oHeight.length; i++){
   if (scrollTop >= 0 && scrollTop + 20 < that.data.oHeight[0].height){
   that.setData({
    isActive: that.data.oHeight[0].key
   });
   } else if (scrollTop + 20 <= that.data.oHeight[i].height) {
   that.setData({
    isActive: that.data.oHeight[i].key
   });
   return false;
   }
  }
  },
  // 处理数据格式，及获取分组高度
  getBrands: function () {
  var that = this;
  var url = config.DOMAIN_API.wikiWholeList,
   data = {};
  //发起get请求,使用方式如下：
  util.ajaxPost(url, data).then((res) => { //成功处理
   that.setData({
   listMain: res
   });
   var number = 0;
   for (let i = 0; i < that.data.listMain.length; i++) {
   wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
    number = rect.height + number;
    var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].name }]
    that.setData({
    oHeight: that.data.oHeight.concat(newArry)
    })
   }).exec();
   };
  }).catch((errMsg) => { //错误处理，已统一处理，此处可以不需要
   console.log(errMsg);
  });
   
  },
  onLoad: function (options) {
  var that = this;
  wx.hideShareMenu()
  that.getBrands();
  },
 })