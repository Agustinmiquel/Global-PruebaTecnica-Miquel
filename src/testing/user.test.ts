import { userService } from "../services/userService";

// PRUEBAS UNITARIAS USUARIOS
describe("UserService", () => {
  beforeEach(() => {
    (userService as any).users = [];
  });

  test("createUser should add a new user", () => {
    const newUser = userService.createUser({
      name: "Marcelo",
      email: "Marcelo@example.com",
      age: 30,
    });
    expect(newUser).toHaveProperty("id");
    expect(newUser.name).toBe("Marcelo");
    expect(newUser.email).toBe("Marcelo@example.com");
    expect(newUser.age).toBe(30);
  });

  test("getUsers should return all users", () => {
    userService.createUser({
      name: "Agustin",
      email: "agumiquel@example.com",
      age: 26,
    });
    userService.createUser({
      name: "Jane Doe",
      email: "jane@example.com",
      age: 25,
    });
    const users = userService.getUsers();
    expect(users).toHaveLength(2);
  });


  test("should delete a user", () => {
    const userCreated = userService.createUser({name: "Usuario ", email: "jane@example.com", age: 25 });
    userService.deleteUser(userCreated.id);
    const users = userService.getUsers();
    expect(users).toHaveLength(0);
  });

  test("should update a user", () => {
    const userCreated = userService.createUser({
        name: "Marcelo",
        email: "marcelo@example.com",
        age: 20,
      });
    const updatedUser = userService.updateUser(userCreated.id, {
      id: userCreated.id,  
      name: "John Doe", 
      email: "john@example.com",
      age: 30  
    });
    expect(updatedUser).toEqual({
      id: userCreated.id,
      name: "John Doe",
      email: "john@example.com",
      age: 30,});
  });
});
