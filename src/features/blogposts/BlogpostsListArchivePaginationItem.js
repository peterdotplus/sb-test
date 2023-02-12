import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchBlogpostsByPage } from './blogpostsArchiveSlice'

const BlogpostsListArchivePaginationItem = ({ label, active }) => {
  const dispatch = useDispatch()

  if(label !== "pagination.next" && label !== "pagination.previous") {
    return (
      <li className={active ? "active" : ""}><button onClick={(e) => {e.preventDefault();dispatch(fetchBlogpostsByPage(label))}}>{label}</button></li>
    )
  } else if(label !== "pagination.previous") {
    return <button className="next-page" onClick={(e) => e.preventDefault()}>Volgende pagina &#8594;</button>;
  }
}

export default BlogpostsListArchivePaginationItem
