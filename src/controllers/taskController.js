const taskService = require('../services/taskService')
const app_constant = require("../constants/app.json");
const validationHelper = require('../helpers/validation')

exports.createTask = async (request, response) => {
    try {
        const required_fields = ["title"];
        const validation = validationHelper.validation(
            required_fields,
            request.body
        );

        if (Object.keys(validation).length) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }

        const addTask = await taskService.createTask(request.body);
        return response.json(addTask);

    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
}

exports.getAllTask = async (request, response) => {
    try {
        const getAll = await taskService.getAllTask();
        return response.json(getAll);

    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
}

exports.getOneTask = async (request, response) => {
    try {
        const required_fields = ['id'];
        const validation = validationHelper.validation(
            required_fields,
            request.params
        );

        if (Object.keys(validation).length) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }

        const getOne = await taskService.getOneTask(request.params);
        return response.json(getOne);

    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
}

exports.UpdateTask = async (request, response) => {
    try {
        const required_fields = ['id'];
        const validation = validationHelper.validation(
            required_fields,
            request.params
        );

        if (Object.keys(validation).length) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }

        const updateOne = await taskService.updateTask(request.params, request.body);
        return response.json(updateOne);

    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
}

exports.deleteTask = async (request, response) => {
    try {
        const required_fields = ['id'];
        const validation = validationHelper.validation(
            required_fields,
            request.params
        );

        if (Object.keys(validation).length) {
            return response.json({
                success: 0,
                status_code: app_constant.BAD_REQUEST,
                message: validation,
                result: {},
            });
        }

        const deleteOne = await taskService.deleteTask(request.params);
        return response.json(deleteOne);

    } catch (error) {
        console.log(error);
        response.json({
            success: 0,
            status_code: app_constant.INTERNAL_SERVER_ERROR,
            message: error.message,
            result: {},
        });
    }
}