import React from 'react'
import { useSelector } from 'react-redux'
import BlogpostsListArchivePaginationItem from './BlogpostsListArchivePaginationItem'

const BlogpostsListArchivePagination = ({ id }) => {
  const links = useSelector((state) => state.blogpostsArchive.links)

  const renderedPagination = links && links.map((links_int, i) => {
    return <BlogpostsListArchivePaginationItem key={i} id={i} label={links_int.label} active={links_int.active} />
  })

  return (
    <div className="pagination"><ul>{renderedPagination}</ul></div>
  )
}

export default BlogpostsListArchivePagination
