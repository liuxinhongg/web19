// pages/shopDetail/shopDetail.js
import aa from "../../utils/apiConfig"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopDe:[],
    topBanner:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    aa.get("/w/website/findGoodsDetail",
    {
      info:options.id
    }).then(res=>{
      console.log(res);
      this.setData({
        shopDe:res.data.data.detail.tbk_item_info_get_response.results.n_tbk_item,
        topBanner:res.data.data.detail.tbk_item_info_get_response.results.n_tbk_item[0].small_images.string
      })
    })
  },
  address(){
    wx.chooseAddress({
      success:res=>{
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function () {
    wx.request({
      url: '后台提高支付接口',
      method:'GET',
      data:{
        openId:openId
      },
      success:res=>{
        wx.requestPayment({
          timeStamp: res.timeStamp,
          nonceStr: res.nonceStr,
          package: res.package,
          signType: 'MD5',
          paySign: res.paySign,
          success (res) { },
          fail (res) { }
        })
      }
    })
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