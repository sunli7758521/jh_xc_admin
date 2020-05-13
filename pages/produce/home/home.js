// pages/system/system_index/system_index.js
const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '工艺管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/pages/produce/process/process'
    },
      {
        title: '作业单管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/pages/produce/mesTask/mesTask'
      },
      {
        title: '生产计划与执行',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/pages/produce/planningExecution/planningExecution'
      },
      {
        title: '数据统计',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/pages/produce/dataStatistical/dataStatistical'
      }
    ]
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function() {
    // 在组件实例进入页面节点树时执行
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
  // 跳转下一级页面
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
  },

})