import { faPlay, faRandom, faStepBackward, faStepForward, faUndoAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './playerfooter.css'
const PlayerFooter=()=>{
  const song={
    imgUrl:'https://uploads.codesandbox.io/uploads/user/a8233562-b36b-483d-9de9-5a1ac148fb0c/2Eq--cattyboard.jpg',
    name:`If it Ain't Love`,
    artist:'Catson Durelo'
  }
  const controls=[faStepBackward,faPlay,faStepForward,faUndoAlt,faRandom]
  return (
    <footer className="player-footer-wrapper">
      <article className="player-footer-song">
        <section className="player-footer-poster">
          <img src={song.imgUrl} alt='song poster'></img>
        </section>
        <section className="player-footer-song-name-wrapper">
          <section>
            {song.name}
          </section>
          <section>
            {song.artist}
          </section>
        </section>
      </article>
      <article className="player-footer-controls">
        {controls.map((icon)=>(
          <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        ))}
      </article>
    </footer>
  )
}

export default PlayerFooter