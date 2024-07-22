const mongoose = require("mongoose")

const schema = mongoose.Schema

const blogSchema = new schema ({
    title : {
        type : String,
        required : true
    },

    subTitle : {
        type : String,
        required : false
    },
    description : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

//mongoose la yo schema lagera Blog bhnne model banaide
const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog

//alternative
// module.exports = mongoose.model("Blog",blogSchema)


    