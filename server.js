const express = require("express");
const bodyParser = require("body-parser");

const User = require("./user");

const getUserList = async (page, pageSize) => {
  const res = await User.find().skip(page).limit(pageSize);
  return res;
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/users", async (req, res) => {
  console.log(`output->req`, req);
  const list = await getUserList(req.query.page, req.query.pageSize);
  res.json(list);
});

app.post("/api/addUser", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
  });
  try {
    const addUser = await user.save();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({ addUser });
    console.log(addUser);
  } catch (error) {}
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
