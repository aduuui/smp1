import express from "express"
import { addEmp, deleteEmp, getAnEmp, getEmp, updateEmp } from "../controller/empControler.js"



const router = express.Router()

router.post("/add", addEmp)
router.get("/get", getEmp)
router.get("/getId/:id",getAnEmp)
router.delete("/deleteId/:id",deleteEmp)
router.put("/update/:id",updateEmp)
export default router