const User = require('../models/userModel');

const users = [];

exports.getUsers = (req, res) => {
    res.render('userView', { users });
};

exports.addUser = (req, res) => {
    const { id, name, email } = req.body;
    const user = new User(id, name, email);
    users.push(user);
    res.redirect('/users');
};
