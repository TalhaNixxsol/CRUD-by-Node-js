const express=require('express')
const controller=require('../controller/controller')

const router=express.Router()

router.post('/create',controller.create)
router.delete('/delete', controller.delete);

module.exports=router;