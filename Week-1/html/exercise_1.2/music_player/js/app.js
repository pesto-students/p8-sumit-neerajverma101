const currentSong = {
  imgUrl: 'https://uploads.codesandbox.io/uploads/user/a8233562-b36b-483d-9de9-5a1ac148fb0c/2Eq--cattyboard.jpg',
  name: 'CattyBoard Top 100 Single Charts (11.06.36)',
  artist: 'Unknown Artist',
  summary: '2016.Charts.100 songs'
}
const albumControls = [
  { label: 'Play all', icon: 'fa fa-play' },
  { label: 'Add to', icon: 'fa fa-plus' },
  { label: 'More', icon: 'fa fa-ellipsis-h' }
]
const song = {
  imgUrl: 'https://uploads.codesandbox.io/uploads/user/a8233562-b36b-483d-9de9-5a1ac148fb0c/2Eq--cattyboard.jpg',
  name: `If it Ain't Love`,
  artist: 'Catson Durelo'
}
const footerControls = ['fa fa-step-backward', 'fa fa-play', 'fa fa-step-forward', 'fa fa-undo', 'fa fa-random']

const songList = [
  { name: 'One dance', album: 'Crake feat CatKid & Cyla', duration: '2:54', urlTagName: 'CATY CLOUD SYNC' },
  { name: 'Panda', album: 'Catte', duration: '4:06', urlTagName: 'CATY CLOUD SYNC' },
  { name: `Can't stop the feeling!`, album: 'Cat Harmony feat Colla', duration: '3:34', urlTagName: 'CATY CLOUD SYNC' },

]
const menus = ['fa fa-bars', 'fa fa-home', 'fa fa-search', 'fa fa-volume-up', 'fa fa-user', 'fa fa-cog', 'fa fa-soundcloud', 'fa fa-spotify']

const renderSideBarMenu = () => {
  let element = ''
  menus.map((menu, index) => {
    element += `<section><i class='${menu}'></i></section>`
  })
  document.getElementById('sidebar-wrapper').innerHTML = element
}

const renderAlbumControls = () => {
  let element = ''
  albumControls.map((control, index) => {
    element += `<article class='flex album-control-wrapper'>
      <article> <i class='${control.icon}'></i></article>
      <article class='album-control-label'>${control.label}</article>
      </article>`
  })
  document.getElementById("album-controls").innerHTML = element
}

const renderPlaylist = () => {
  let element = ''
  songList.map((song, index) => {
    element += `<article class='flex song-row'>`

    Object.keys(song).map(key => {
      element += `<article class='row-data'>
              ${key === 'name' ? `${index + 1} ${song[key]}` : key === "urlTagName" ? `<span class='song-url-tag'>${song[key]}</span>` : song[key]}
            </article>`
    })
    element += `</article>`
    document.getElementById('playlist-wrapper').innerHTML = element
  })
}

const renderFooterControls = () => {
  let element = ''
  footerControls.map((icon) => (
    element += `<i class='${icon}'></i>`
  ))
  document.getElementById('player-footer-controls').innerHTML = element
}

renderSideBarMenu()
renderAlbumControls()
renderPlaylist()
renderFooterControls()
