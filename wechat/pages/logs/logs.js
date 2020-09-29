Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:"今天是星期天，马上放假了~",
    listdata:[
      {name:"窗前明月光",data:"星期一"},
      {name:"疑是地上霜",data:"星期二"},
      {name:"举头望明月",data:"星期三"},
      {name:"低头思故乡",data:"星期四"}
    ],
    num:8,
    item:{
      index: 0,
      msg: '我是template组件里面的模板',
      time: '2016-09-15'
    },
    x:0,
    y:0,
    toView:"green",
    InputVal:"",
    sortList:[],
    status:0,
    content:""||"配饰"
  },
  changeTap(e){
    console.log(e)
    this.setData({
      status:e.currentTarget.dataset.id,
      content:e.currentTarget.dataset.name
    })
  },
  move(){
    // console.log(this.data.x);
    // this.data.x = 30
    // this.data.y = 30;
    // console.log(this.data.x,this.data.y)
    this.setData({
      x:30,
      y:30
    })
  },
  getdata(e){
    console.log(e.detail.value);
    this.setData({
      InputVal:e.detail.value
    })
  },
  sousuo(){
    // tab导航跳转页面jump
    // wx.navigateTo({
    //   url: '../jump/jump?info='+this.data.InputVal,
    // })
    // 日志导航跳转商品导航、
    wx.setStorage({
      key:'aa',
      data:this.data.InputVal
    })
    wx.switchTab({
      //  wx.switchTab: url 不支持路径传参
      url:"../shop/shop"
    })
  },
  btn(e){
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
    // wx.showLoading({
    //   title: '加载中',
    // })
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 5000
    })
    wx.request({
      url: 'https://www.wumeili.top/w/website/findGoodsTypeList',
      method:"GET",
      success:res=>{
        // console.log(res);
        this.setData({
          sortList:res.data.data
        })
        if(res.data.status==="0"){
          wx.hideToast()
        }
      }
    })
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