Component({
  // data:{
  //   ImageList:[]
  // },
  properties:{
    ImageList:{
      type:Array,
      value:[],
      observers:{
        ImageList:(res)=>{
          this.setData({
            ImageList :res
          })
        }
      }
    },
    sHeight:{
      type:String,
      value:''
    },
    url:{
      type:String,
      value:''
    }
  },
  ready(){
   
  }
})