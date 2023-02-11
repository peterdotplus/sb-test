import { combineReducers } from 'redux'

import blogpostsReducer from './features/blogposts/blogpostsSlice'
import blogpostsArchiveReducer from './features/blogposts/blogpostsArchiveSlice'

const rootReducer = combineReducers({
  blogposts: blogpostsReducer,
  blogpostsArchive: blogpostsArchiveReducer,
})

export default rootReducer
