// pages/project/progress/progress.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    elements: [
    {
      title: '施工单管理',
      color: 'purple'
    },
    {
      title: '车间出库',
      color: 'mauve'
    },
    {
      title: '成品入现场库',
      color: 'pink'
    },
    {
      title: '各部门进度反馈',
      color: 'brown'
    },
    {
      title: '任务分发',
      color: 'red'
    },
    {
      title: '安装工上报工序',
      color: 'orange'
    },
    {
      title: '质量检验',
      color: 'green'
    },
    {
      title: '返修与复检',
      color: 'olive'
    },
    {
      title: '楼栋施工进度表',
      color: 'grey'
    },
    {
      title: '项目施工进度表',
      color: 'mauve'
    }
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
