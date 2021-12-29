const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    personType: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    }
})

const imageSchema = new mongoose.Schema({

    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})


const hostelSchema = new mongoose.Schema({
    roomType: {
        type: String,
        required: true
    },
    avail: {
        type: Boolean,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})


const flatSchema = new mongoose.Schema({
    flatType: {
        type: String,
        required: true
    },
    avail: {
        type: Boolean,
        required: true
    },
    price: {
        type: String,
        required: true
    }

})

const residencyTypeSchema = new mongoose.Schema({
    hostel: [
        hostelSchema
    ],
    flat:[
        flatSchema
    ]

})


const residencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    residencyFor: {
        type: String,
        required: true
    },
    residencyType: {
        residencyTypeSchema

    },
    contacts: [
        contactSchema
    ],
    facility: [],
    images: [
        imageSchema
    ],
    startingPrice: {
        type: String,
        required: true
    }
})


const residencyModel= new mongoose.model("hostel",residencySchema);
module.exports=residencyModel;