const Task = require('../models/taskModel')
const app_constant = require("../constants/app.json");
require('dotenv').config()


exports.createTask = async (data) => {

    const newTask = await Task.create({
        title: data.title,
        description: data.description || '',
        status: data.status || 'pending'
    });

    if (newTask) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "Task added successfully",
            result: newTask
        };
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!',
        result: {}
    }

};

exports.getAllTask = async () => {

    const data = await Task.find()

    if (data) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "All Data fetch successfully",
            result: data
        };
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!',
        result: {}
    }

};

exports.getOneTask = async (data) => {

    const { id } = data;
    const task_data = await Task.findOne({ _id: id })

    if (!task_data) {
        return {
            success: 0,
            status: app_constant.BAD_REQUEST,
            message: "Task not exist",
            result: {}
        };
    }

    if (task_data) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "Task data fetched successfully",
            result: task_data
        };
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!',
        result: {}
    }

};

exports.updateTask = async (data, changeData) => {
    const { id } = data
    let { title, description, status } = changeData
    const task_data = await Task.findOne({ _id: id })
    if (!task_data) {
        return {
            success: 0,
            status: app_constant.BAD_REQUEST,
            message: "Task not exist",
            result: {},
        }
    }

    if (!title) {
        title = task_data.title
    }
    if (!description) {
        description = task_data.description
    }
    if (!status) {
        status = task_data.status
    }

    const result = await Task.updateOne(
        { _id: id },
        { $set: { title: title, description: description, status: status } }
    )

    if (result) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "Task updated successfully",
            result: data,
        }
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!',
        result: {}
    }
}

exports.deleteTask = async (data) => {
    const { id } = data

    const task_data = await Task.findOne({ _id: id })
    if (!task_data) {
        return {
            success: 0,
            status: app_constant.BAD_REQUEST,
            message: "Task not exist",
            result: {},
        }
    }

    const result = await Task.findByIdAndDelete(id);

    if (result) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "Task deleted successfully",
            result: data,
        }
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!',
        result: {}
    }

}

