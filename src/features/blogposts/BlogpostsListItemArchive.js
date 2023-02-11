import React from 'react'
import { useSelector } from 'react-redux'

const selectTodoById = (state, blogpostId) => {
  return state.blogpostsArchive.data.find((blogpost) => blogpost.id === blogpostId)
}

const BlogpostsListitemArchive = ({ id }) => {
  const todo = useSelector((state) => selectTodoById(state, id))
  const { title, content, created_at, category, img_url } = todo

  var date = new Date(created_at);
  var date_timestamp = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

  return (
    <div className="pure-u-1 pure-u-md-1-4">
      <div className="blogpostslistitem">
      <div className="blogpostslistitem-image">
        <img src={"https://frontend-case-api.sbdev.nl/storage/" + img_url} alt={"Social Brothers - " + title} />
        <span className="image-timestamp">{date_timestamp}</span>
        <span className="image-category">{category.name}</span>
      </div>
      <h1>{title}</h1>
      <p>{content}</p>
      </div>
    </div>
  )
}

export default BlogpostsListitemArchive
