// pages/project/mes/mes.js
const app = getApp();
const base = require("../../../utils/base.js")
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: "Boolean",
      value: Boolean,
      observer: function (news, olds, path) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  //   elements: [{
  //     title: '项目信息',
  //     color: 'purple'
  //   },
  //   {
  //     title: '楼栋楼层信息',
  //     color: 'mauve'
  //   },
  //   {
  //     title: '项目变更',
  //     color: 'pink'
  //   }
  //  ],
   elements:[],
   parentId:''
  },
    //  在组件进入实例化
lifetimes: {
  attached: function() {
    let that = this;
    // 在组件实例进入页面节点树时执行
   


  },

  accepts:function(e){
  
  },
  attached: function() {
  
    // 页面创建时执行
    let that = this;
    console.log("======1111=====",)
   
    
  },
  detached: function() {
    // 在组件实例被从页面节点树移除时执行
   
  },
},


  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('toChild', myEventDetail, myEventOption)
    },
    toDetails:function(e){
        console.log("==e==",e)
        wx.navigateTo({
          url: '/pages/project/mes/mesDetails/mesDetails',
        })
    },
    // 方法加载页面传递的值
    onLoad: function(e) {
     let that = this;
     that.setData({
      parentId:e.parentId 
     })
     console.log("e======",e)
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
            elements: res.data
           })
           console.log("======222=",that.data.elements) 
         }
 
     })
    }
  }
})
