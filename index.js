// // 0. 下载第三方并导入
// const mongoose = require("mongoose");

// /**
//  *  1. 和数据库建立连接
//  *      语法: mongoose.connect('数据库的地址', 回调函数)
//  *      数据库的地址: mongodb://localhost:27017/库名
//  *      注意: 如果当前数据库内没有该 库, 会创建一个 库 连接进去, 如果有这个 库, 直接连接进去
//  */
// mongoose
//   .connect("mongodb://localhost:27017/admin")
//   .then(() => console.log("Connected!"));

// /**
//  *  2. 创建一个 表模型(按照表头来建立模型)
//  *      语法: new mongoose.Schema({ 模型配置 })
//  *      返回值: 一个表模型
//  */
// const user = new mongoose.Schema({
//   name: String, // 该表内有一个 name 表头, 是 String 类型
//   age: Number, // 该表内有一个 age 表头, 是 Number 类型
//   createTime: {
//     // 该表内 有一个 createTime 表头, 有多条限制
//     type: Date, // 类型为 Date
//     default: new Date(), // 默认是当前时间
//   },
//   password: {
//     type: String,
//     require: true, // 必填
//   },
//   gender: {
//     type: String,
//     enum: ["男", "女", "保密"], // 枚举, 该属性的值只能是该数组内的成员
//   },
// });

// const UserModel = mongoose.model("users", user);

// new UserModel({
//   name: "管理员",
//   age: 18,
//   password: "123456",
//   gender: "男",
// })
//   .save()
//   .then((res) => {
//     console.log("存储数据成功", res);
//   })
//   .catch((err) => {
//     console.log("存储数据失败", err);
//   });

// /**
//  *  5-3 分页查询
//  *      语法: UserModel.find().skip(开始索引).limit(多少个)
//  */
// UserModel.find()
//   .skip(0)
//   .limit(2)
//   .then((res) => {
//     console.log(res, res.length);
//   });
