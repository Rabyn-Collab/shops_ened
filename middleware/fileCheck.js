const path = require('path');




module.exports.fileCheck = (req, res, next) => {
  try {

    if (!req.files || !req.files.product_image) {
      return res.status(400).json({
        status: 'error',
        message: 'please provide an image'
      });
    } else {
      const extensions = ['.jpg', '.png', '.jpeg'];
      const file = req.files.product_image;
      const ext = path.extname(file.name);
      if (extensions.includes(ext)) {
        file.mv(`./uploads/images/${file.name}`, (err) => {
          console.log(err);
        });
        return next();
      } else {
        return res.status(400).json({
          status: 'error',
          message: 'please provide a valid image'
        });
      }

    }

  } catch (err) {

    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }



}
