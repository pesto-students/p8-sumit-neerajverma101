import './playlist.css'

const PlayList = () => {
  const songList = [
    { name: 'One dance', album: 'Crake feat CatKid & Cyla', duration: '2:54', urlTagName: 'CATY CLOUD SYNC' },
    { name: 'Panda', album: 'Catte', duration: '4:06', urlTagName: 'CATY CLOUD SYNC' },
    { name: `Can't stop the feeling!`, album: 'Cat Harmony feat Colla', duration: '3:34', urlTagName: 'CATY CLOUD SYNC' },

  ]
  return (
    <article className="wrapper">
      {
        songList.map((song, index) => (
          <article className='song-row'>
            {
              Object.keys(song).map(key => (
                <article className='row-data'>
                  {key === 'name' ? `${index + 1} ${song[key]}`: key==="urlTagName"? <span className='song-url-tag'>{song[key]}</span> :song[key] }
                </article>
              ))
            }
          </article>
        ))
      }

    </article>
  )
}

export default PlayList