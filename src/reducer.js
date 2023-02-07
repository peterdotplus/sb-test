import { combineReducers } from 'redux'

import blogpostsReducer from './features/blogposts/blogpostsSlice'

const rootReducer = combineReducers({
  blogposts: blogpostsReducer,
})

export default rootReducer
