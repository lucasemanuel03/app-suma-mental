import express from 'express';
import levelService from './level.service.js'

const router = express.Router();

router.get('/', async(req, res) => {
    let result = {};
    const level = +req.query.level
    try{
        if(req.query.level == undefined){
            result = levelService.getAllLevels();
            console.log('ingreso por true', result);
        }else{
            result = levelService.getLevel(level);
            console.log(result);
        }

        res.status(200).json(result)
        
    }catch(error){
        console.log("error", error);
        res.status(500).json({error: 'error'})
    }


})

const levelController = {router};
export default levelController;