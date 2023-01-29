const express = require('express');
const {avatar} = require('../models');

const router = express.Router();

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const avatarList = await avatar.findAll({where:{ID_User: id}})
    if(!avatarList){
        res.status(464).json({message: 'No avatar for this user'});
    }
    else{
        res.status(200).json(avatarList);
    };

});

router.post('/', async (req,res) => {
    const Avatart = req.body;
    await avatar.create(Avatart);
    res.status(200).json(Avatart);
});

router.delete(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'There is not that avatar'})
    }
    const Avatart = await avatar.destroy({
        where: {ID_Avatar: id}})
        if (!Avatart) {
            res.status(464).json({message: 'Failed to delete avatar'})
        }
        else{
            res.status(200).json(Avatart);
        }
});

module.exports = router;