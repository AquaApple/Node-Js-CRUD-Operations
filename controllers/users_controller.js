const User = require('../models/user')

module.exports = {
    getAllUsers(req,res,next){
        User.find()
        .then(users => res.status(200).send(users))
        .catch(err => res.status(400).send(err.message))
    },
    createUser(req,res,next){
        const userDetails = req.body
        User.create(userDetails)
        .then(user=>res.status(201).send(user))
        .catch(next)
    },
    edit(req, res,next){
        const userId = req.params.id;
        const userDetails = req.body
        User.findByIdAndUpdate({_id: userId}, userDetails)
        .then(()=> User.findById({_id: driverId}))
        .then(user => res.status(200).send(user))
        .catch(next)
      },
      details(req, res,next){
        const userId = req.params.id;
        User.findById({_id: userId})
        .then(user => res.status(200).send(user))
        .catch(next)
      },
      delete(req, res,next){
        const userId = req.params.id;
        User.findByIdAndRemove({_id: userId})
        .then(user => res.status(204).send(user))
        .catch(next)
    
      }
}