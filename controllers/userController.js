



module.exports.userLogin = (req, res) => {
  console.log(req.body);
  return res.status(201).json('hello user');
}