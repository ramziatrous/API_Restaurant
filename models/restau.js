const mongoose = require('mongoose');

const Restaurant = mongoose.model('Restaurant' , {
    name: {
        type:String
    },
    adresse:{
        type: String
    },
    kategorie: {
        type: String
    }
})
module.exports = Restaurant;


