import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsisH, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import './currentsong.css'

const CurrentSong=()=>{
  const currentSong={
    imgUrl:'https://uploads.codesandbox.io/uploads/user/a8233562-b36b-483d-9de9-5a1ac148fb0c/2Eq--cattyboard.jpg',
    name:'CattyBoard Top 100 Single Charts (11.06.36)',
    artist:'Unknown Artist',
    summary:'2016.Charts.100 songs'
  }
  const controls=[
    {label:'Play all',icon:faPlay},
    {label:'Add to',icon:faPlus},
    {label:'More',icon:faEllipsisH}
  ]

  return (
    <header className="album-wrapper">
      <article className="album-image">
        <img src={currentSong.imgUrl} alt='album poster'></img>
      </article>
      <article className="album-details">
       <article className="album-detail-wrapper">
          <article className="album-name">
            <h3>{currentSong.name}</h3>
          </article>
          <article className="album-summary">
            {currentSong.artist}
          </article>
          <article className="album-summary">
            {currentSong.summary}
          </article>
       </article>
       <article className="album-controls">
        {controls.map((control,index)=>(
          <article className='album-control-wrapper'>
          <article> <FontAwesomeIcon icon={control.icon}/></article>
          <article className='album-control-label'>{control.label}</article>
          </article>
        ))}
       </article>
      </article>
    </header>
  )
}

export default CurrentSong