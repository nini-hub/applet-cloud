// miniprogram/pages/detail/detail.js

const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:""
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
        console.log(res,"baidu")

        db.collection("kaikeba").add({
          data:{
            name:"开课吧"
          },
          success:ret=>{
            console.log(ret)
          }
        })
      }
    })
  },


  //如何调用云函数

})