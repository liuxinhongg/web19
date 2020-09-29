Component({
  // data:{
  //   ImageList:[]
  // },
  properties:{
    ImageList:{
      type:Array,
      value:[],
      observers:{
        ImageList:(newVal)=>{
          this.setData({
            ImageList :newVal
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