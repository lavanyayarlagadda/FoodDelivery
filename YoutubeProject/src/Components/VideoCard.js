import React from 'react'

const VideoCard = ({info}) => {
    console.log(info,"INFORMATIOn")
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails}  = snippet
  return (
    <div className='p-2 m-4 shadow-lg w-80'>
      <img className='rounded-xl' src={thumbnails.medium.url} alt="video" /> 
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  )
}

export default VideoCard