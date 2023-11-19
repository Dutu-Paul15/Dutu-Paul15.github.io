import React, { useState } from "react"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

import { blog } from "../../assets/data/data"
import "../../components/header/header.css"
import "./details.css"
import YoutubeEmbed from "./YouTubeVideo"

const DetailsPages1 = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [id])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              {blogs.id === 1 ? (
              <YoutubeEmbed embedId="XfwUDljlI8w"/>) :
              (<img src={blogs.cover} alt=" "/>)}
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>{blogs.h1}</h1>
              <p>{blogs.desc}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}

export {DetailsPages1}
