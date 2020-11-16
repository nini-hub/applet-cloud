// miniprogram/pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:"",
    result:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { pic, fileID } = options;
    this.setData({
      imgUrl:pic
    })

    wx.cloud.callFunction({
      name:"baidu2",
      data:{
        fileID: fileID
      },
      success:res=>{
        const {result:{info:{result}}} = res
        this.setData({
          result:result
        })
      }
    })
  },


  //如何调用云函数

})