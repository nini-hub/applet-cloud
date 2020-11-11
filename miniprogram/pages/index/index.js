//index.js
const app = getApp()

Page({
  data: {
   
  },
  doUpload:function(event){
    console.log(event);
    let {target} = event;
    let {dataset} = target;
    let { index } = dataset;

    let sourceType = "camera";
    if(index == 0){
      sourceType = "camera";

    }else if(index == 1){
      sourceType = "album";

    };

    wx.chooseImage({
      count:1,
      sizeType: ['original','compressed'],
      sourceType: [sourceType],
      success: function(res) {
        console.log(res)
        let filePath = res.tempFilePaths[0];
        const cloudPath = `animal/${Date.now()}${filePath.match(/\.[^.]+?$/)}`
        console.log(cloudPath);
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success:res=>{
            console.log(res)

            wx.navigateTo({
              url: `../detail/detail?pic=${filePath}&&fileID=${res.fileID}`
            })

          }
        })
      },
    })
  },
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
  }

})
