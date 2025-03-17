import { User } from "../models/user_model.js";
import { userValidator } from "../validators/validator.js";
import bcrypt from "bcrypt"


export const registerUser = async (req, res) => {

    const { error, value } = userValidator.validate(req.body)

    if (error) {
        res.status(400).json({ message: error.details[0].message })
    }

    console.log(value)

    const exisitingUser = await User.findOne({ email: value.email });

    console.log(exisitingUser)

    if (exisitingUser) {
        res.status(400).json({ message: "User already registered" }
        )
    } else {
        const hashedPassword = bcrypt.hash(value.password, 12)

        const newUser = User.create({
            userName: value.userName,
            email: value.email,
            password: hashedPassword
        })

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        })
    }
}