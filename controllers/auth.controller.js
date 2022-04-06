const User = require('../models/User.model')

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(next)
}

module.exports.login = (req, res, next) => {
  
}