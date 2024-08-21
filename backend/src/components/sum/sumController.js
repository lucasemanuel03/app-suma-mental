import express from "express";
import sumService from "./sum.service.js";

const router = express.Router();

router.get('/', async (req, res) => {
    let result = {}
    const level = +req.query.level || 1;

    try{
        const {num1, num2, sum} = sumService.getSum(level)
        result = {
            numero1: num1,
            numero2: num2,
            resultado: sum,
        }

        res.status(200).json(result)
    } catch(error){
        console.log("error", error);
        res.status(500).json({error: 'error'})
    }
})

const sumController = {router}
export default sumController;
