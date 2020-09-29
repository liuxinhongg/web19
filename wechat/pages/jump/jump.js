// pages/jump/jump.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    page:1,
    name:'',
  },
  sj(e){
    console.log(e.detail.value);
    this.setData({
      name:e.detail.value
    })
  },
  sousuo(){
    this.getdata(this.data.name,this.data.page)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:options.name
    })
    console.log(options);
    this.getdata(this.data.name,this.data.page)
  },
  getdata(aa,num){
    wx.request({
      url: 'https://www.wumeili.top/w/website/findGoodsList',
      data:{
        info:aa,
        pageNo :num
      },
      method:"GET",
      success:res=>{
        console.log(res);
        this.setData({
          goodsList:res.data.data.tbk_dg_material_optional_response.result_list.map_data
        })
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
    this.data.page++;
    console.log(this.data.page)
    this.getdata(this.data.name,this.data.page)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})