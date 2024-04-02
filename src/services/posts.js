import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  return posts
}

export function getPostsByUser(userId) {
  return posts.filter(post => post.userId === userId)
}

export function getPostById(id) {
  return posts.find(post => post.id === id)
}

function generateId(arr){
  return arr.length > 0 ? Math.max(...arr.map(post => post.id)) + 1 : 1
}

export function addPost(post) {
  const id = generateId(posts)
  post.id = id
  posts.unshift(post)
  return id
}

export function updatePostTitle(id, title) {
  const post = getPostById(id)
  if(post){
    post.title = title
    return true
  }
  return false
}

export function updatePostBody(id, body) {
  const post = getPostById(id)
  if(post){
    post.body = body
    return true
  }
  return false
}

export function updatePost(id, post) {
  const origPost = getPostById(id)
  if (origPost){
    origPost.title = post.title !== undefined ? post.title : origPost.title
    origPost.body = post.body !== undefined ? post.body : origPost.body
    return true
  }
  return false
}

export function deletePostBy(id) {
  const iLength = posts.length
  posts = posts.filter(post => post.id !== id)
  return iLength !== posts.length
}

export function deletePostsByUserId(userId) {
  const iLength = posts.length
  posts = posts.filter(post => post.userId !==userId)
  return iLength !== posts.length
}
