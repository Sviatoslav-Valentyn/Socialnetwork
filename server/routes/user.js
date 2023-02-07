const express = require('express');
const bcrypt = require('bcrypt')
const {users} = require('../models');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', async (req,res) => {
    const UserList = await users.findAll();
    res.status(200).json(UserList);
});

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'No id'})
    }
    const User = await users.findByPk(id);
    if (User == null)
    {
    res.status(464).json({message: 'user by id not found'})
    }
    else{
        res.status(200).json(User);
    }
});

router.post('/registration', async (req,res) => {
    const {Name,Password,Email,PhoneNumber} = req.body;
    bcrypt.hash(Password, 20).then((hash) => {
        users.create({Name,Password: hash,Email,PhoneNumber});
    })
    res.status(200).json("Success!");
});

router.post("/login", async (req, res) => {
  const { Password, Email, User_Name } = req.body;

  if (!Email || !User_Name || !Password) {
    res.status(404).json({ message: "Login or Password --- Error" });
  }

  Email
    ? (user = await users.findOne({ where: { Email: Email } }))
    : (user = await users.findOne({ where: { User_Name: User_Name } }));

  if (user) {
    bcrypt.compare(Password, user.Password).then((match) => {
      if (!match) {
        res.status(401).json({ message: "password is incorrect" });
      } else {
        const acsessToken = jwt.sign(
            {ID_User: user.ID_User}, 'mySecreyKey'
        );
        res.status(200).json(acsessToken);
        console.log(acsessToken);
      }
    });
  }
});

router.put(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const UserBody = req.body;
    const Useritem = await users.update(UserBody, { where: { ID_User: id} })
    if(!id) {
        res.status(404).json({message: 'user not found'})
    }
    else{
        if (!Useritem) {
            res.status(464).json({message: 'failed to update user'})
        }
        else{
            res.status(200).json(Useritem);
        }
    } 
});

router.delete(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'id not specified'})
    }
    const UserWasDelete = await users.destroy({
        where: {ID_User: id}})
    if (!UserWasDelete) {
    res.status(464).json({message: 'failed to delete user'})
    }
    else{
        res.status(200).json(UserWasDelete);
    }
});

module.exports = router;