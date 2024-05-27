import React from 'react'

const News = ({
    date,
    time,
    title,
    image,
    link
}) => {
  return (
    <div className='news-wrapper'>
      <img src={image} alt="" />
      <p>{date}</p>
      <p>{time}</p>
      <p>{title}</p>
      <p>{link}</p>
    </div>
  )
}

export default News
