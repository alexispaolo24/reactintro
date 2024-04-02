import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getCommentById(id) {
  return comments.find(comment => comment.id === id)
}

export function getCommentsByPostId(postId) {
  return comments.filter(comment => comment.postId === postId)
}

export function updateCommentBody(id, body) {
  const index = comments.findIndex(comment => comment.id === id)
  if(index != -1){
    comments[index].body = body
    return true
  }
  return false
}

export function deleteCommentById(id) {
  const iLength = comments.length
  comments = comments.filter(comment => comment.id !== id)
  return iLength !== comments.length
}
export function generateId(arr){
  return arr.length > 0 ? Math.max(...arr.map(comment =>comment.id)) + 1 : 1
}

export function addComment(comment) {
  const id = generateId(comments)
  comment.id = id
  comments.push(comment)
  return id
}
