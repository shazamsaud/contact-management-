
const asyunchHandler = require("express-async-handler");
const Contact = require("../models/contactModel")



const getContacts =  asyunchHandler(async(req,res)=>{
    const contact = await Contact.find();
    res.status(200).json(contact);
});

const createContact = asyunchHandler(async (req,res)=>{
   
    console.log("the req body is ", req.body);
    const {name , email, phone} = req.body;
    if (!name || !email || !phone){
        res.status(400);
        throw new Error("All fields mandatory");
    }
    const contact = await Contact.create({
        name,email,phone
    });
    res.status(201).json(contact);


});

const getContact= asyunchHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    res.status(200).json(contact);
});

const updateContact = asyunchHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    const updatedContact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(updatedContact);
});

const deleteContact = asyunchHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found");
    }
    await Contact.deleteOne();
    res.status(200).json(contact);
});


module.exports = { getContacts ,createContact,getContact,updateContact,deleteContact}












