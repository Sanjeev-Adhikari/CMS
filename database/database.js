const mongoose = require("mongoose")
exports.connectDatabase = async() =>{
    //connecting to database

    //jaba samma database sanga connect hudaina wait gar
 await mongoose.connect("mongodb+srv://sanjeevadhikari:Fullstackdeveloper@cluster0.ewgjd8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

 console.log("Database connected successfully")
}