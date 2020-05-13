// pages/system/system_index/system_index.js
const app = getApp();
Page({

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
        title: '用户管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/indexes/indexes'
    },
      {
        title: '角色管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/animation/animation'
      },
      {
        title: '菜单管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg',
        url: '/drawer/drawer'
      },
      {
        title: '部门管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/verticalnav/verticalnav'
      }
      ,
      {
        title: '岗位管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
        url: '/verticalnav/verticalnav'
      }
      ,
      {
        title: '字典管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg',
        url: '/verticalnav/verticalnav'
      }
      ,
      {
        title: '公司管理',
        img: 'https://image.weilanwl.com/color2.0/plugin/qpczdh2307.jpg',
        url: '/verticalnav/verticalnav'
      }
    ]
  },
  // 跳转下一级页面
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/plugin' + e.currentTarget.dataset.url
      })
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})