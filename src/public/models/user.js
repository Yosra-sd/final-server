const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },

    password: {
        type:String,
        required:true
    },

    prenom: {
        type:String,
        required:true
    },

    nom: {
        type:String,
        required:true
    },

    dateNaissance: {
        type:Date,
        required:true
    },

    numTelephone: {
        type: Number,
        required: true
    },

    cin: {
        type:Number,
        required:true
    },
    
    adresse: {
        type:String,
        required:true
    },

    role: {
        type: String,
        required: true
    },

    sexe: {
        type: String,
        required: true
    },

    fonction: {
        type:String,
        required:true
    },

    soldeConges: {
        type:Number,
        required:false,
        default: 30
    },

    salaire: {
        type:Number,
        required:false
    },

    ID_CNSS: {
        type: Number,
        required: false
    },

    nbEnfants: {
        type: Number,
        required: false
    },

    statutConjuguale: {
        type: String,
        required: false
    },

    refreshToken: {
        type:String
    },

    resetLink: {
        data:String,
        default: ''
    },

    versionKey: false
})

mongoose.model('User', userSchema)