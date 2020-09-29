const Apiconfi="https://www.wumeili.top";
/*
let ajax = {
  get(url,data,success){
    wx.request({
      url:Apiconfi+ url,
      data:data,
      success,
    })
  }
}*/
let ajax = {
  get(url,data,success){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:Apiconfi+ url,
        data:data,
        success:resolve,
        fail:reject
      })
    })
  }
}
export default ajax;
// module.exports={
//   ajax
// } ;
// get(url,{},res=>{})