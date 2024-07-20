const { connectDatabase } = require("./database/database")

const app = require("express")()

connectDatabase()


//GET API

app.get("/", (req,res)=>{
    res.json({
        status : 200,
        message : "sucess"
    })
})

app.listen(3000,()=>{

    console.log("Server is running at port 3000")
})