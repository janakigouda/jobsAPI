const mongoose=require("mongoose");

const jobSchema=new mongoose.Schema({
    company:{type:String},
    postedAt:{type: Date, default: Date.now()},
    city:{type:String},
    location: {type:String},
	role: {type:String},
	level:{type:String},
	contract:{type:String},
	position:{type:String},
	language:{type:String}
})

const jobs=mongoose.model("jobs",jobSchema);

module.exports=jobs;