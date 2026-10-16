import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type :String,
            required : true,
            trim : true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true
        },
        salary:{
            type:Number,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
)


const empModel = mongoose.model("empModel",employeeSchema)

export default empModel