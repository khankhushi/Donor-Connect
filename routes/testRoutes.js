const express = require("express");
const { testController } = require("../controllers/testController");

// router object - stores only routing functionality
 const router = express.Router();

 // routes
 router.get('/', testController);

 // routes
 module.exports = router;
