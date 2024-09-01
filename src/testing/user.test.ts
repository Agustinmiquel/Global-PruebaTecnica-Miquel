import { userService } from '../services/userService';

describe('UserService', () => {
  beforeEach(() => {
    (userService as any).users = [];
  })

  test('createUser should add a new user', () => {
    const newUser = userService.createUser({ name: 'John Doe', email: 'john@example.com', age: 30 });
    expect(newUser).toHaveProperty('id');
    expect(newUser.name).toBe('John Doe');
    expect(newUser.email).toBe('john@example.com');
    expect(newUser.age).toBe(30);
  })

  test('getUsers should return all users', () => {
    userService.createUser({ name: 'John Doe', email: 'john@example.com', age: 30 });
    userService.createUser({ name: 'Jane Doe', email: 'jane@example.com', age: 25 });
    const users = userService.getUsers();
    expect(users).toHaveLength(2);
  })
});
