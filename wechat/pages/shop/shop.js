// pages/shop/shop.js
// const aa = require("../../utils/apiConfig");
import aa from "../../utils/apiConfig"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodehtml:`
      <h1>我是速度放缓</h1>
      <h2>我是速度放缓</h2>
      <h3>我是速度放缓</h3>
      <h4>我是速度放缓</h4>
      `,
    jdt:60,
    info:'',
    longitude:0,
    latitude:0,
    markers:[
      {
        iconPath: "../../images/cat1.jpg",
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 20,
        height: 20
      }
    ],
    bannerList:[],
    sortList:[],
    neirong:''||'配饰',
    status:0
  },
  changTap(e){
    // console.log(e)
    this.setData({
      neirong:e.currentTarget.dataset.name,
      status:e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url: '../jump/jump?name='+e.currentTarget.dataset.name,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    aa.get("/w/website/findGoodsTypeList",{},res=>{
      this.setData({
        sortList:res.data.data
      })
      if(res.data.status==="0"){
        wx.hideToast()
      }
    })*/
    aa.get("/w/website/findGoodsTypeList",{}).then(res=>{
      this.setData({
        sortList:res.data.data
      })
      if(res.data.status==="0"){
        wx.hideToast()
      }
    })
    /*
    wx.request({
      url: 'https://www.wumeili.top/w/website/findGoodsTypeList',
      method:"GET",
      success:res=>{
        console.log(res);
        this.setData({
          sortList:res.data.data
        })
        if(res.data.status==="0"){
          wx.hideToast()
        }
      }
    })*/
    // 轮播图
    /*
    aa.get("/w/website/bannerList",{},res=>{
      this.setData({
        bannerList:res.data.data
      })
    })*/
    aa.get("/w/website/bannerList",{}).then(res=>{
      this.setData({
        bannerList:res.data.data
      })
    })
    /*
    wx.request({
      url: 'https://www.wumeili.top/w/website/bannerList',
      method:"GET",
      data:{},
      success:res=>{
        console.log(res)
        this.setData({
          bannerList:res.data.data
        })
      }
    })*/
















    this.getDt()
    let that=this;
    wx.getStorage({
      key:"aa",
      success:function(res){
        console.log(res);
        that.setData({
          info:res.data
        })
      }
    })
  },
  getDt(){
    wx.getLocation({
      success:res=>{
        console.log(res);
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          "markers[0].latitude":res.latitude,
          "markers[0].longitude":res.longitude,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。
  // LineWidth 线条的宽度
  // moveTo() 方法把路径移动到画布中的指定点，不创建线条。
  // arc(x坐标，y坐标，半径，起始弧度，终止弧度，弧度的方向是否是逆时针) 方法创建弧/曲线（用于创建圆或部分圆）。
  // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
  // draw()向画布上绘制图像
  onReady: function () {
    console.log(this.data.info)
    var context=wx.createCanvasContext('canvas');
    var canvasSquare=wx.createCanvasContext('canvasSquare');
    canvasSquare.setFillStyle('red')
    canvasSquare.fillRect(20,20,100,80)
    canvasSquare.draw()
    context.setStrokeStyle("#f00");
    context.setLineWidth(2);
    context.moveTo(160,100);
    context.arc(100,100,60,0,2*Math.PI,true);
    context.moveTo(140,100)
    context.arc(100,100,40,0,Math.PI,false);
    context.moveTo(85,80)
    context.arc(80,80,5,0,2*Math.PI,true);
    context.moveTo(125,80)
    context.arc(120,80,5,0,2*Math.PI,true);
    context.stroke();
    context.draw()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getImageInfo({
      src:"../../images/cdat0.jpg",
      success:res=>{
        console.log(res)
      }
    })
    wx.getImageInfo({
      src: '../../images/cat1.jpg',
      success (res) {
        console.log(res)
      }
    })
  },
  chooseImage(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res);
      }
    })
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