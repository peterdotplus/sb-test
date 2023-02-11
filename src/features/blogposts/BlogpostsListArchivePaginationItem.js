import React from 'react'

const BlogpostsListArchivePaginationItem = ({ label, active }) => {

  if(label !== "pagination.next" && label !== "pagination.previous") {
    return (
      <li className={active ? "active" : ""}>{label}</li>
    )
  } else if(label !== "pagination.previous") {
    return <a href="#" className="next-page" onClick={(e) => e.preventDefault()}>Volgende pagina &#8594;</a>;
  }
}

export default BlogpostsListArchivePaginationItem
