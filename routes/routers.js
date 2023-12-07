const express = require('express');
const { registerController, loginController , testController } = require('../controllers/controller');
const { requireSignIn, isAdmin } = require('../middleware/middlewares');
const router = express.Router()


//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);


module.exports = router;