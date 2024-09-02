import { NextFunction, Request, Response } from "express";
import { userService } from "../services/userService";


export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, email, age} = req.body;
        if(!userService.isEmailUnique(email)){
            res.status(400).json({message: 'Email already exists'});
        }
        const user = userService.createUser({name, email, age});
        return res.status(201).json(user);
    } catch (error) {
        return next(error);
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = userService.getUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'});
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = userService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        return next(error);
    }
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = userService.getUserById(id);
        if(!user) return res.status(404).json({message: 'User not found'});
        userService.deleteUser(id);
        res.status(200).json({message: 'User deleted'});
    } catch (error) {
        return next(error);
    }
}

export const updateUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const { id } = req.params;
        if(!userService.getUserById(id)) return res.status(404).json({message: 'User not found'});
        const UpdateUser =userService.updateUser(id, req.body);
        res.status(200).json(UpdateUser);
    } catch (error) {
        return next(error);
    }
}