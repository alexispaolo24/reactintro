import { users as data } from "../data/users";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}

export function getUserById(id) {
  //get single user by id
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  //update user (userInfo is an object which can optionally contain properties of a user)
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user,
        ...userInfo,
      };
    }

    return user;
  });
}

function generateId(arr){
  return arr.length > 0 ? Math.max(...arr.map(user => user.id)) + 1 : 1
}
export function addUser(userInfo) {
  const id = generateId(users)
  users.push({ id, ...userInfo})
  return id
}
