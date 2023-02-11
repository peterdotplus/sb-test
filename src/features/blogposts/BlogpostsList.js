import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import BlogpostsListItem from './BlogpostsListItem'

const selectBlogpostIds = (state) => state.blogposts.map((blogpost) => blogpost.id)

const BlogpostsList = () => {
  const blogpostIds = useSelector(selectBlogpostIds, shallowEqual)

  const renderedListItems = blogpostIds.map((blogpostId) => {
    return <BlogpostsListItem key={blogpostId} id={blogpostId} />
  })

  return <div className="blogposts-list">{renderedListItems}</div>
}

export default BlogpostsList
