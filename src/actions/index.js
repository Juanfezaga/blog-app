export const createBlogPost = blog => {
  return {
    type: "CREATE_POST",
    payload: blog
  }
}

export const DeletePost = id => {
  return {
    type: "DELETE_POST",
    id
  }
}