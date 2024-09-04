const express = require('express')
const taskRoute = express.Router()
const taskController = require('../controllers/taskController')

taskRoute.post('/tasks', taskController.createTask)
taskRoute.get('/tasks', taskController.getAllTask)
taskRoute.get('/tasks/:id', taskController.getOneTask)
taskRoute.put('/tasks/:id', taskController.UpdateTask)
taskRoute.delete('/tasks/:id', taskController.deleteTask)



module.exports = taskRoute;