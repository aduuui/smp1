import express from "express"
import { addEmp, deleteEmp, getAnEmp, getEmp } from "../controller/empControler.js"



const router = express.Router()

router.post("/add", addEmp)
router.get("/get", getEmp)
router.get("/getId/:id",getAnEmp)
router.delete("/deleteId/:id",deleteEmp)
export default router