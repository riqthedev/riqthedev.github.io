const auth = require("../service/auth.service.js")
const createError = require('http-errors')

class authController {
    static register = async (req,res, next) => {
        try {
            const user = await auth.register(req.body);
            res.status(200).json({
                status: true,
                message: 'User created successfully!',
                data: user

            })
        } catch (error) {
            console.log(error)
            next(createError(error.statusCode, error.message))
        }
    }

    static login = async (req,res, next) => {
        try {
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: "User logged in !",
                data
            })

        } catch (error) {
            next(createError(error.statusCode, error.message))
        }
    }

    static all = async (req, res, next) => {
        try {
            const users = await auth.all();
            res.status(200).json({
                status: true,
                message: "All Users",
                data: users
            })

        } catch (error) {
            next(createError(error.statusCode, error.message))
        }
    }
}


module.exports = authController;