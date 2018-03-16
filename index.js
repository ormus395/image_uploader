const express = require("express"),
  morgan = require("morgan"),
  uploads = require("./multer_config");

const app = express();
const port = 5000;
app.use("/uploads", express.static("uploads"));

app.post(
  "/avatar_img",
  /*auth.verify,*/ uploads.single("avatar"),
  (req, res, next) => {
    let avatar_url = req.file.path;
    res.status(200).json({
      message: "img uploaded",
      avatar_url: avatar_url
    });
  }
);

app.listen(port, () => {
  console.log("server started " + port);
});
