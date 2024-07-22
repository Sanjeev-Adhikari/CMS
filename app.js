const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogmodel")
const express = require("express")
const app = express();

//nodejs lai form bata ako data parse gar bhaneko

app.use(express.json());
app.use(express.urlencoded({extended:true}))
//Database connection

connectDatabase()



//GET API
app.get("/", (req,res)=>{
    res.json({
        status : 201,
        message : "sucess"
    })
})

//Get API for All blogs => (/blogs)
app.get("/blogs", async (req,res)=>{

    //fetching/reading all blogs from the blog model
    const blogs = await Blog.find()

    //check if blogs contain data or not
    if(Blog.length == 0) {
        res.status(404).json({

            // status : 404,
            message : "blog is empty"
        })
    }else {
        res.status(201).json ({
            // status : 201,
            message : "Blog fetched successfully ", 
            data : blogs
        })
    }
})

//Get API for single blog => (/blogs/:id)
app.get("/blogs/:id", async (req,res)=>{
 const id = req.params.id
 //alternative const {id} = req.parms

//  const blog = await Blog.find({_id: id})

//     if(blog.length == 0){
//         res.status(404).json({
//             message : "Can't fetch any blog"
//         })
        
//     }else {
//         res.status(201).json({
//             message : "single blog fetched successfully",
//             data : blog
//         })
//     }  
// 

 //Alternative
const blog = await Blog.findById(id)

if(blog){
    res.status(201).json({
        message : "single blog found successfully",
        data : blog
    })
}else { 
    res.status(404).json({
        message : "blog not found"
    })
}

})
//POST API for creating the blog => (/createBlog)
app.post("/createBlog", async (req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description

    //alternative (object destructuring) const {title,subTitle.description} = req.body

    //logic for inserting data to database

    await Blog.create({
        title : title,
        subTitle: subTitle,
       description : description,   
    })
    res.json({
        status : 201,
        message : "Blog created successfully"
    })

   // alternative
  //  res.status(201).json({
     //   message : "Blog created successfully"
   // })
})

//Setting the port no for our express to run
app.listen(2000,()=>{
    console.log("Server is running at port 2000")
})