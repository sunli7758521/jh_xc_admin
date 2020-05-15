// pages/system/system_index/system_index.js
const app = getApp();
const base = require("../../../utils/base.js")
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
    parentId:2145,
    list:[]
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let that = this;
    // 在组件实例进入页面节点树时执行
    wx.request({
        url: base.url + '/wx/menu/selectMenuByParentId',
        method: "POST",
        data: {parentId:that.data.parentId},
        header: {
          'content-type': 'application/x-www-form-urlencoded',//解决请求不到数据
          'cookie': wx.getStorageSync("sessionid")//读取sessionid,当作cookie传入后台将PHPSESSID做session_id使用
        },
        success(res) {
          that.setData({
            list: res.data
          })
          console.log("======222=",that.data.list) 
        }

    })
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