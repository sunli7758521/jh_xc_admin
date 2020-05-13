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
        title: '项目信息管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/pages/project/mes/mes'
    },
      {
        title: '施工工艺管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/pages/project/process/process'
      },
      {
        title: '项目计划管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/pages/project/plan/plan'
      },
      {
        title: '项目进度管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/pages/project/progress/progress'
      }
    ]
  },
  // 跳转下一级页面
  methods: {
    toChild(e) {
      wx.navigateTo({
        url:  e.currentTarget.dataset.url
      })
    },
  }
})