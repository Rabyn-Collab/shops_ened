const Product = require('../model/Product');

module.exports.productAdd = async (req, res) => {

  try {

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

