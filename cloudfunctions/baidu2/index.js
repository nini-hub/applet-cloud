// 云函数入口文件
const cloud = require("wx-server-sdk");

var AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// 设置APPID/AK/SK
var APP_ID = "22962526";
var API_KEY = "582ugvZv2XjLPfyCc2nGGDbW";
var SECRET_KEY = "64kUQFbs5cn3UpBIMQbC5bRbG3zsmDMZ";

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  const { fileID } = event;
  //通过fileID取这张图片

  const res = await cloud.downloadFile({
    fileID: fileID
  })

  const buffer = res.fileContent;
  let image = buffer.toString("base64");

  const info = await client.animalDetect(image,{baike_num:5})

  return {
    info
  };
};
