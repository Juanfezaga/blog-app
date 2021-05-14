const initialState = {
  posts: []
}

export default function postsReducer(state=initialState, action){
  switch(action.type){
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post, index) => index !== action.id)
      }
    default:
      return state;
  }
}