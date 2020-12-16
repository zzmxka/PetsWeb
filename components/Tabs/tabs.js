// components/Tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 存放的是要从父组件中接收的数据
     * type:要接收数据的类型
     * value 默认值
     */
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   * 1 页面.js文件中 存放事件回调函数的时候 存放在data同层级下！！！
   * 2 组件.js文件中 存放事件回调函数的时候 必须要存放在methods中！！！
   */
  methods: {
    hanldeItemTap(e){
      /**
       * 1 绑定点击事件 需要在methods中绑定
       * 2 获取被点击的索引
       * 3 获取原数组
       * 4 对象组循环
       *   1 给每一个循环性 选中属性 改为false
       *   2 给当前的索引的 项 添加激活选中效果就可以了！！!
       */
      //获取索引
      const{index}=e.currentTarget.dataset;
      //获取data中的数组
      let{tabs}=this.data;
      //循环数组
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})
