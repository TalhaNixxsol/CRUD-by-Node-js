const express=require('express')
const controller=require('../controller/controller')

const router=express.Router()

router.post('/create',controller.create)
router.delete('/delete', controller.delete);
router.put('/update',controller.update);
router.get('/get',controller.get);

module.exports=router;