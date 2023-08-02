const upload = (req, res) => {
  let fileObj = null;
  let filePath = "";

  if (!req.files || Object.keys(req.files).length === 0) {
    res.send({
      code: -1,
      msg: "Bad Request.",
    });
    return;
  }

  fileObj = req.files.file;

  filePath = "./upload/" + fileObj.name;
  fileObj.mv(filePath, (err) => {
    if (err) {
      return res.send({
        code: -2,
        msg: "System error",
      });
    }

    res.send({
      code: 0,
      data: "Upload Successfuly",
    });
  });
};

module.exports = {
  upload,
};
