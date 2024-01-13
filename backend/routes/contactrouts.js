const express = require('express');
const Contact = require('../model/contact')
const mongoose = require("mongoose");
const router = express.Router();

router.get('/', async (req, res) => {
    const contacts = await Contact.find({});
    res.json(contacts);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({msg: "ID ist not valid."})
    }
    const contact = await Contact.findById(id);
    res.json(contact);
})

router.post('/', async (req, res) => {
    const {Firstname, Lastname, Mobile} = req.body;
    try {
        const contactSaved = await Contact.create({Firstname, Lastname, Mobile});
        res.json({msg: "New contact added."})
    }catch (error){
        res.status(400).json({msg: "New contact didn't added " + error});
    }

})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({msg: "ID ist not valid."})
    }
    try {
        const changedContact = await Contact.findByIdAndUpdate(id,{
            ...req.body
        });
        res.json({msg: "Contact changed"});
    }catch (error){
        return res.json({msg: "Couldn't change the contact " + error})
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({msg: "ID ist not valid."})
    }
    try {
        const contactSaved = await Contact.findByIdAndDelete(id);
        return res.json({msg: "Contact cancled."})
    }catch (error){
        return res.json({msg: "Couldn't delete the contact."})
    }
})

module.exports = router;