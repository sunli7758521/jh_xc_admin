const app = getApp();
const base = require("../../utils/base.js")
const md5 = require('../../utils/md5.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errInfo: "",
    captchaEnabled: true,
    loginType:'wxapp'
  },

  // 提交登录页面
  formSubmit: function (e) {
    let that = this;
    if(e.detail.value.username.length > 0 && e.detail.value.password.length > 0){
      wx.request({
        url: base.url + '/login',
        method: "POST",
        data: {
          username: e.detail.value.username,
          password: e.detail.value.password,
          rememberMe: true,
          loginType:that.data.loginType
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded',//解决请求不到数据
          'cookie': wx.getStorageSync("sessionid")//读取sessionid,当作cookie传入后台将PHPSESSID做session_id使用
        },
        success(res) {
          console.log("res========",res.data.data)
          console.log("user========",res.data.data.user)
          console.log("allRoles========",res.data.data.allRoles)
          wx.removeStorageSync('sessionid');//每次登录时清楚缓存
          wx.setStorageSync('sessionid', res.header['Set-Cookie']); //保存Cookie到Storage
          if(res.data.code==0){
            that.setData({
                  errInfo: res.data.msg
             })
            // 每次登录成功移除当前登录用户的key 
             wx.removeStorage({
               key: 'sysuser',
             })
              // 每次登录成功移除保存所有的角色key 
              wx.removeStorage({
                key: 'allRoles',
              })
            //  保存当前登录用户
             wx.setStorage({
               data: res.data.data.user,
               key: 'sysuser',
             })
              //  保存所有的角色
              wx.setStorage({
                data: res.data.data.allRoles,
                key: 'allRoles',
              })
             
              
             // 登录成功跳转生产页面
            //   wx.navigateTo({
            //     url: '/pages/index/index',
            //  })
             wx.reLaunch({
              url: '/pages/index/index',
           })
          }else{
              that.setData({
                errInfo: res.data.msg
             })
          }
         

          
          // if (res.data.status) {
          //   that.setData({
          //     errInfo: res.data.msg
          //   })
          //   wx.setStorage({
          //     key: 'userinfo',
          //     data: res.data.obj,
          //   })
          //   wx.getStorage({
          //     key: 'userinfo',
          //     success: function (res1) {
          //       let originalPassword = md5.hexMD5(res1.loginName + "123456" + res1.salt)
          //       if (res1.data.password == originalPassword) {
          //         wx.navigateTo({
          //           url: '/pages/mine/editPassword/index',
          //         })
          //       } else {
          //         wx.navigateTo({
          //            url: '/pages/index/index',
          //         })
                
          //         wx.showToast({
          //           title: res.data.msg,
          //           icon: 'success',
          //           duration: 2000
          //         })
          //       }
          //     },
          //     fail: function () {

          //     }
          //   })
            
          // } else {
          //   that.setData({
          //     errInfo: res.data.msg
          //   })
          // }
        }
      })
    }else{
      that.setData({
        errInfo: '账号或密码输入为空！'
      })
    }
    
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