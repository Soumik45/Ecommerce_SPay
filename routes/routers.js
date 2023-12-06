const express = require('express');
const { registerController, loginController } = require('../controllers/controller');
const router = express.Router()


//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
//router.get("/test", requireSignIn, isAdmin, testController);


module.exports = router;