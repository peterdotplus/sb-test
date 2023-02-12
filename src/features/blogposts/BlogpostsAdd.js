import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { saveNewBlogpost } from './blogpostsSlice'

const BlogpostsAdd = () => {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(0)
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleChangeTitle = (e) => setTitle(e.target.value)
  const handleChangeCategory = (e) => setCategory(parseInt(e.target.value))
  const handleChangeImage = (e) => {if (e.target.files) {
      setImage(e.target.files[0]);
    }
  }
  const handleChangeContent = (e) => setContent(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!image) return;

    const formData = new FormData();
    formData.append("myFile", image, image.name)

    dispatch(saveNewBlogpost(title, category, formData, content))

    setTitle('')
    setCategory(0)
    setImage('')
    setContent('')
  }

  return <div className="blogposts-add">
    <h1>Plaats een blog bericht</h1>
    <label key="post-title">
      <p>Berichtnaam</p>
      <input type="text" placeholder="Geen titel" onChange={handleChangeTitle} />
    </label>
    <label key="post-category">
      <p>Categorie</p>
      <select onChange={handleChangeCategory}><option value="0">Geen categorie</option><option value="1">Tech</option><option value="2">Nieuws</option></select>
    </label>
    <label key="post-image">
      <p>Header afbeelding</p>
      <input type="file" onChange={handleChangeImage} />
    </label>
    <label key="post-content">
      <p>Bericht</p>
      <textarea rows="10" onChange={handleChangeContent}></textarea>
    </label>
    <input type="submit" value="Bericht aanmaken" onClick={handleSubmit} />
  </div>
}

export default BlogpostsAdd
