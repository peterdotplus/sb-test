import { client } from '../../api/client'

const initialState = []

export default function blogpostsReducer(state = initialState, action) {
  switch (action.type) {
    case 'blogposts/blogpostAdded': {
      return [...state, action.payload]
    }
    case 'blogposts/blogpostDeleted': {
      return state.filter((blogpost) => blogpost.id !== action.payload)
    }
    case 'blogposts/blogpostsLoaded': {
      return action.payload
    }
    default:
      return state
  }
}

// Thunk function
export async function fetchblogposts(dispatch, getState) {
  const response = await client.get('https://frontend-case-api.sbdev.nl/api/posts')
  dispatch({ type: 'blogposts/blogpostsLoaded', payload: response.blogposts })
}

export function saveNewblogpost(text) {
  return async function saveNewblogpostThunk(dispatch, getState) {
    const initialblogpost = { text }
    const response = await client.post('https://frontend-case-api.sbdev.nl/api/posts', { blogpost: initialblogpost })
    dispatch({ type: 'blogposts/blogpostAdded', payload: response.blogpost })
  }
}
