import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import store from '../../store'
import { fetchBlogposts } from './blogpostsArchiveSlice'
import BlogpostsListItemArchive from './BlogpostsListItemArchive'
import BlogpostsListArchivePagination from './BlogpostsListArchivePagination'

store.dispatch(fetchBlogposts)

const selectBlogpostIds = (state) => state.blogpostsArchive && state.blogpostsArchive.data && state.blogpostsArchive.data.map((blogpost) => blogpost.id)

const BlogpostsListArchive = () => {
  const blogpostIds = useSelector(selectBlogpostIds, shallowEqual)

  const renderedListItems = blogpostIds && blogpostIds.map((blogpostId) => {
    return <BlogpostsListItemArchive key={blogpostId} id={blogpostId} />
  })

  return <div><div className="blogposts-list">{renderedListItems}</div><BlogpostsListArchivePagination /></div>
}

export default BlogpostsListArchive
