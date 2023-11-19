const mongoose = require('mongoose')
const Schema  = mongoose.Schema
const accountsSchema = new Schema ({
    username:{
        type:String
    },
    password:{
        type:String
    },
    assets: {
        type:Number
    }
}, {timestamps:true})
const accountsModel = mongoose.model('Accounts', accountsSchema)
module.exports=accountsModel