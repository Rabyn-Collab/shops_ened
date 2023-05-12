const Product = require('../model/Product');
const fs = require('fs');
const mongoose = require('mongoose');


module.exports.getAllProducts = async (req, res) => {

  try {
    const data = await Product.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }

}


module.exports.getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'please provide valid id'
      });
    } else {
      const data = await Product.findById({ _id: id });
      return res.status(200).json(data);
    }

  } catch (err) {

    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }

}



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
    fs.unlink(`.${imagePath}`, (err) => {
      console.log(err);
    })
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });

  }


}

module.exports.productUpdate = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const {
    product_name,
    product_detail,
    product_price,
    brand,
    category,
    countInStock
  } = req.body;
  try {

    if (req.imagePath) {
      await Product.findByIdAndUpdate({ _id: id }, {
        product_name,
        product_detail,
        product_price,
        brand,
        category,
        countInStock,
        product_image: req.imagePath
      });


    } else {
      await Product.findByIdAndUpdate({ _id: id }, {
        product_name,
        product_detail,
        product_price,
        brand,
        category,
        countInStock,
      });
    }


    return res.status(201).json({
      status: 'success',
      message: 'successfully updated'
    });

  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });

  }


}


module.exports.productRemove = async (req, res) => {
  const imagePath = req.query.imagePath;
  const id = req.params.id;

  try {
    if (!imagePath) {
      return res.status(400).json({
        status: 'error',
        message: 'please provide imagePath'
      });
    } else {

      fs.unlink(`.${imagePath}`, async (err) => {
        if (err) {
          return res.status(400).json({
            status: 'error',
            message: `${err}`
          });
        } else {
          await Product.findByIdAndDelete({ _id: id });
        }
      });

    }


  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: `${err}`
    });
  }


}






