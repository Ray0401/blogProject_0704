// 导入express模块
var express=require("express");
// 创建express的服务器实例
var app=express();


// 托管静态资源文件
app.use("/node_modules",express.static("node_modules"));
// 设置模板引擎
app.set("view engine","ejs");
// 模板页面的存放路径
app.set("views","./views");


// 调用app.listen方法,指定端口号并启动web服务器
app.listen(3003,function(){
    console.log("Express server running at http://127.0.0.1:3003");
})

