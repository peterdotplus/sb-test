import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const selectTodoById = (state, blogpostId) => {
  return state.blogposts.data.find((blogpost) => blogpost.id === blogpostId)
}

const BlogpostsListitem = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { title, content, img_url, created_at, category } = todo

  var date = new Date(created_at);
  var date_timestamp = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  const dispatch = useDispatch()

  return (
    <div className="pure-u-1 pure-u-md-1-2">
      <div className="blogpostslistitem">
      <div className="blogpostslistitem-image">
        <img src={img_url} alt={"Social Brothers - " + title} />
        <span className="image-timestamp">{date_timestamp}</span>
        <span className="image-category">{category.name}</span>
      </div>
      <h1>{title}</h1>
      <p>{content}</p>
      </div>
    </div>
  )
}

export default BlogpostsListitem
