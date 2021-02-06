const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ users }))
    .catch((err) => res.status(500).send({ message: 'Some Error' }));
};

const createUser = (req, res) => {
  const { name, about, email } = req.body;
  User.create({ name, about, email })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: ' Some Error' }));
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true,
      runValidators: true,
      upsert: true,
    },
  )
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ message: 'Some Error' }));
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => res.send({ user }))
    .catch((err) => res.status(500).send({ message: 'Some Error' }));
};

module.exports = { createUser, updateUser, deleteUser, getUsers };
