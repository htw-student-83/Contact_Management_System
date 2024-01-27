const Contact = require('../model/contact')
const mongoose = require("mongoose");

//create a new contact
const createContact = async (req, res) => {
    const {Firstname, Lastname, Mobile} = req.body;
    try {
        const contactSaved = await Contact.create({Firstname, Lastname, Mobile});
        if(contactSaved){
            console.log(contactSaved);
        }
        res.json({msg: "New contact added."})
    }catch (error){
        res.status(400).json({msg: "New contact didn't added " + error});
    }
}

//get all contacts
const getContacts = async (req, res) => {
    const contacts = await Contact.find({});
    res.json(contacts);
}

//get a contact
const getContact = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({msg: "ID is not valid."})
    }
    const contact = await Contact.findById(id);
    res.json(contact);
}

//change a contact
const changeContact = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({msg: "ID is not valid."})
    }
    try {
        const changedContact = await Contact.findByIdAndUpdate(id,{
            ...req.body
        });
        res.json({msg: "Contact changed"});
    }catch (error){
        return res.json({msg: "Couldn't change the contact " + error})
    }
}

//delete a contact
const deleteContact = async (req, res) =>{
    const { id } = req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({msg: "ID is not valid."})
    }
    try {
        const contactSaved = await Contact.findByIdAndDelete(id);
        return res.json({msg: "Contact cancled."})
    }catch (error){
        return res.json({msg: "Couldn't delete the contact."})
    }
}

module.exports = {
    createContact,
    getContact,
    getContacts,
    changeContact,
    deleteContact,
}