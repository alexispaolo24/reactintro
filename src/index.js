//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers, getUserById, addUser } from "./services/users";
import { addComment, deleteCommentById, getCommentById, getCommentsByPostId, updateCommentBody } from "./services/comments"
import { addPost, deletePostBy, deletePostsByUserId, getPostById, getPosts, getPostsByUser, updatePost, updatePostBody, updatePostTitle } from "./services/posts";

console.log(getCommentById(7))

console.log(getCommentsByPostId(2))

updateCommentBody(7,'this is an edited body')
console.log(getCommentById(7))

deleteCommentById(8)
console.log(getCommentsByPostId(2))

let comment = {
    postId: 2,
    name: 'example',
    email: 'example@example.com',
    body: 'example body'
}
addComment(comment)
console.log(getCommentsByPostId(2))

console.log(getPosts())

console.log(getPostsByUser(1))

console.log(getPostById(24))

let post = {
    userId: 1,
    title: 'sample title',
    body: 'sample body'
}
addPost(post)
console.log(getPostsByUser(1))

updatePostTitle(24, 'This is the new title')
console.log(getPostById(24))

updatePostBody(24, 'This is the new body')
console.log(getPostById(24))

let post2 ={
    userId: 3,
    title: 'this is the updated title',
    body: 'this is the  updated body'
}
updatePost(24, post2)
console.log(getPostById(24))

deletePostBy(8)
console.log(getPostsByUser(1))

deletePostsByUserId(1)
console.log(getPostsByUser(1))

console.log(getAllUsers())

console.log(getUserById(1))

updateUser(1, { email: "roger@77.com" });
console.log(getUserById(1))

let user = {
    name: "Alexis Paolo Moneva",
    username: "Alexis",
    email: "sample@example.com",
    address:{
        street: "example street",
        suite: "example unit",
        city: "Example City",
        zipcode: "6014",
        geo:{
            lat:"123.123",
            lng: "-123.123"
        },
    },
    phone: "1-234-567-8910",
    website: "example.org",
    company: {
        name: "Example Company",
        catchPhrase: "We got it all for you",
        bs: "retail"
    }
}
addUser(user)
console.log(getAllUsers())
