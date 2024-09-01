"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
class UserServie {
    constructor() {
        this.users = [];
    }
    createUser(user) {
        const newUser = Object.assign({ id: Date.now().toString() }, user);
        this.users.push(newUser);
        return newUser;
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
    updateUser(id, user) {
        const userindex = this.users.findIndex(user => user.id === id);
        if (userindex !== -1) {
            this.users[userindex] = Object.assign(Object.assign({}, this.users[userindex]), user);
            return this.users[userindex];
        }
        return logger_1.default.error("Verifique que los datos sean distintos");
    }
    isEmailUnique(email) {
        return !this.users.some(user => user.email === email);
    }
}
exports.userService = new UserServie();
