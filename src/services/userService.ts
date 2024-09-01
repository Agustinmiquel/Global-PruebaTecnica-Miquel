import { User } from '../models/Usuarios';
import logs from '../utils/logger';

class UserServie{
    private users: User[] = [];

    createUser(user:Omit<User, 'id'>){
        const newUser:User = {
            id: Date.now().toString(),
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }

    getUsers():User[]{
        return this.users;
    }

    getUserById(id:string):User|undefined{
        return this.users.find(user => user.id === id);
    }

    deleteUser(id:string){
        this.users = this.users.filter(user => user.id !== id);
    }

    updateUser(id:string, user:User){
        const userindex = this.users.findIndex(user => user.id === id);
        if(userindex !== -1){
            this.users[userindex] = {...this.users[userindex], ...user};
            return this.users[userindex];
        }
        return logs.error("Verifique que los datos sean distintos");
    }

    isEmailUnique(email:string):boolean{
        return !this.users.some(user => user.email === email);
    }
}

export const userService = new UserServie();