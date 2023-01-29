const express = require('express');
const {photo} = require('../models');

const router = express.Router();

router.get(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    const photoList = await photo.findAll({where:{ID_User: id}})
    if(!photoList){
        res.status(464).json({message: 'No photo for this user'});
    }
    else{
        res.status(200).json(photoList);
    };

});

router.post('/', async (req,res) => {
    const Photo = req.body;
    await photo.create(Photo);
    res.status(200).json(Photo);
});

router.delete(`/byId/:id`, async (req,res) => {
    const id = req.params.id;
    if (!id)
    {
        res.status(404).json({message: 'There is not that photo'})
    }
    const Photo = await photo.destroy({
        where: {ID_Photo: id}})
        if (!Photo) {
            res.status(464).json({message: 'Failed to delete photo'})
        }
        else{
            res.status(200).json(Photo);
        }
});

module.exports = router;