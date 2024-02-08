const mongoose = require('mongoose');

// Define a schema for the User
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
   basket:[
      {
         id: {
            type: Number,
            required: true,
         },
       
         title: {
            type: String,
            required: true,
         },
         url: {
            type: String,
            required: true,
         },
       
         price: {
            type: Number,
            required: true,
         },
         rating: {
            type: Number,
             
         },
      }
   
   ]
});

 
const User = mongoose.model('User', userSchema);

module.exports = User;
