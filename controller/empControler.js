import empModel from "../models/employee.js"





export const addEmp = async(req,res)=>{
try {
    const {name,email,salary} = req.body

    if(!name || !email || !salary){
        return res.json({
            massage : "fields are missing"
        })
    }


    const empData = await empModel.create({name,email,salary})
    res.json({
        message:"employee added sucessfully",
        data: empData

    })
} catch (error) {
    res.json({
        message:"server gose wrong",
        error: error.message
    })
}
}









export const getEmp = async(req,res)=>{
    try {
        const allEmp = await empModel.find()
        if (!allEmp) {
            return res.json({
                message : "emp not found"
            })
            
        }
        res.json({
            message :"all emp found",
            data : allEmp

        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error : error.message
        })
    }
}


export const getAnEmp = async(req,res)=>{
    try {
        const {id} = req.params
        const empData = await empModel.findById(id)
        if(!empData){
            return res.json({
                message : "id not found"
            })
            
        }
        res.json({
            message : "id found",
            data : empData
        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error :error.message
        })
    }
}






export const deleteEmp = async(req,res)=>{
    try {
        const{id} = req.params
        const deletedEmp = await empModel.findByIdAndDelete(id)
        if(!deletedEmp){
            return res.json({
                message : "employee/id not found"

            })
        }
        res.json({
            message : "employee deleted",
            data : deletedEmp.name
        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error : error.message
        })
    }
}









export const updateEmp = async(req,res) =>{
    try {
        const {id} = req.params
        const updatedData = await empModel.findByIdAndUpdate(id,req.body,{
            new : true,
            runValidators : true
         
        })
        if(!updatedData){
           return res.json({
            message : "updation failed"

           }) 
        }
        res.json({
            message :"updated succesfully",
            data : updatedData.name
        })
    } catch (error) {
        res.json({
            message : "somthing went wrong",
            error : error.message
        })
    }
}