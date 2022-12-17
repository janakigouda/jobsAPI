const {Router}=require("express");
const jobs=require("./job.module");

const jobsRoute=Router();

jobsRoute.post("/",async(req,res)=>{
    try{
        console.log(req.body);
        let jobPost=await jobs.create(req.body);
        res.send(`${jobPost} - job inserted successfullt`)
    }catch(e){
        res.status(500).send(e.message);
    }
});

jobsRoute.get("/",async(req,res)=>{
    try{
        let jobsData=await jobs.find();
        res.send(jobsData)
    }catch(e){
        res.status(500).send(e.message);
    }
});


module.exports=jobsRoute;
