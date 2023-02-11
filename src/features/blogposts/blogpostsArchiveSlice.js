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
export async function fetchBlogposts(dispatch, getState) {
  const response = await client.get('https://frontend-case-api.sbdev.nl/api/posts?perPage=8', {headers: {token: "pj11daaQRz7zUIH56B9Z"}})
  dispatch({ type: 'blogposts/blogpostsLoaded', payload: response })
}

export const fetchBlogpostsByPage = pageId => async dispatch => {
  const response = await client.get(`https://frontend-case-api.sbdev.nl/api/posts?perPage=8&page=${pageId}`, {headers: {token: "pj11daaQRz7zUIH56B9Z"}})
  dispatch({ type: 'blogposts/blogpostsLoaded', payload: response })
}