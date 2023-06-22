import React from 'react'

const Adventure = ({id, image, info, title}) => {
  return (
   <div className='maincard'>
    <img src={image} alt={title} className='photo' />
    <article>
     <div className="title-icons">
      <h5>{title}</h5>
      <p>icons</p>
     </div>
     <p className="adventure-text">
      {info}
      <button>Read More</button>
     </p>
    </article>
    <button className='notbtn'>Not Intrested</button>
    </div>
  )
}

export default Adventure