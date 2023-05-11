const Product = require('../model/Product');

module.exports.productAdd = async (req, res) => {
  const imagePath = req.imagePath;

  const {
    product_name,
    product_detail,
    product_price,
    brand,
    category,
    countInStock
  } = req.body;
  try {

    await Product.create({
      product_name,
      product_detail,
      product_price,
      brand,
      category,
      countInStock,
      product_image: imagePath
    });

    return res.status(201).json({
      status: 'success',
      message: 'successfully created'
    });

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });

  }


}

module.exports.productUpdate = async (req, res) => {

  try {


  } catch (err) {

  }


}


module.exports.productRemove = async (req, res) => {

  try {


  } catch (err) {

  }


}


module.exports.getAllProduct = async (req, res) => {

  try {


  } catch (err) {

  }


}



module.exports.getProductById = async (req, res) => {

  try {


  } catch (err) {

  }


}

