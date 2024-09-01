"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.createUser = void 0;
const userService_1 = require("../services/userService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, age } = req.body;
        if (!userService_1.userService.isEmailUnique(email)) {
            res.status(400).json({ message: 'Email already exists' });
        }
        const user = userService_1.userService.createUser({ name, email, age });
        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = userService_1.userService.getUsers();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = userService_1.userService.getUserById(id);
        res.status(200).json(user);
    }
    catch (error) {
        return error;
    }
});
exports.getUserById = getUserById;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = userService_1.userService.getUserById(id);
        if (!user)
            return res.status(404).json({ message: 'User not found' });
        userService_1.userService.deleteUser(id);
        res.status(200).json({ message: 'User deleted' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!userService_1.userService.getUserById(id))
            return res.status(404).json({ message: 'User not found' });
        const UpdateUser = userService_1.userService.updateUser(id, req.body);
        res.status(200).json(UpdateUser);
    }
    catch (error) {
        next(error);
    }
});
exports.updateUser = updateUser;
