// pages/system/system_index/system_index.js
const app = getApp();
// const base = require("../../utils/base.js")
const base = require("../../../utils/base.js")
// const md5 = require('../../utils/md5.js')
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
//  在组件进入实例化
lifetimes: {
  attached: function(e) {
    let that = this;
    // 在组件实例进入页面节点树时执行
    wx.request({
        url: base.url + '/system/menu/list',
        method: "POST",
        data: {},
        header: {
          'content-type': 'application/x-www-form-urlencoded',//解决请求不到数据
          'cookie': wx.getStorageSync("sessionid")//读取sessionid,当作cookie传入后台将PHPSESSID做session_id使用
        },
        success(res) {
          console.log("======111=",res)
        }
    })


  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
  },
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