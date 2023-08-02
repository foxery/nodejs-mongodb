const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/admin");

const user = new mongoose.Schema({
  name: String,
  age: Number,
  createTime: {
    type: Date,
    default: new Date(), // 默认是当前时间
  },
  password: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    enum: ["男", "女", "保密"],
  },
});

const UserModel = mongoose.model("users", user);

module.exports = UserModel;
