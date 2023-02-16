const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();


const tasksController = require('../controllers/TasksController');

//CRUD OPERATIONS 
router.get('/all', tasksController.getAllTasks);
router.post("/create-one", tasksController.createOneTask);
router.get("/get-one/:id", tasksController.getOneTask);
router.put("/update-one/:id", tasksController.updateOneTask);
router.delete("/delete-one/:id", tasksController.deleteOneTask);
//router.delete("/delete-many", tasksController.deleteManyTasks);
router.delete("/delete-many", tasksController.deleteManyTasks);

module.exports = router;