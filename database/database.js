const mongoose = require("mongoose")
exports.connectDatabase = async() =>{
    //connecting to database

    //jaba samma database sanga connect hudaina wait gar
 await mongoose.connect("mongodb+srv://sanjeev:hello@cluster0.nqvprxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

 console.log("Database connected successfully")
}