const User = require("../model/user");

const getUserList = async (page, pageSize) => {
  const res = await User.find().skip(page).limit(pageSize);
  return res;
};

const getUsers = async (req, res) => {
  const list = await getUserList(req.query.page, req.query.pageSize);
  res.send({
    code: 0,
    data: list,
  });
};

const addUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });
  try {
    await user.save();
    res.send({
      code: 0,
      data: "success",
    });
  } catch (error) {
    res.send({
      code: -2,
      data: "",
      msg: error,
    });
  }
};

module.exports = {
  getUsers,
  addUser,
};
