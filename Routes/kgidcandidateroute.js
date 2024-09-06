const express=require('express');
const {KGIDController}=require('../Controllers/kgidcandidatecontroller.js');
const router = express.Router();


router.post('/kgidcandidate-login',KGIDController.loginKGID);
router.put('/kgidcandidate-update',KGIDController.updateKGID);


module.exports=router;
