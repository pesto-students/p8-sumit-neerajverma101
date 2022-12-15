import { faBars, faCloud, faCog, faHome, faSearch, faUser, faVolumeUp, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidebar.css'
const SideBarMenu=()=>{
  const menus=[faBars,faHome,faSearch,faVolumeUp,faUser,faCog,faCloud,faWifi]
  return (
    <article className="sidebar-wrapper">
      {
        menus.map((menu,index)=>(
          <section><FontAwesomeIcon icon={menu}></FontAwesomeIcon> </section>
        ))
      }
    </article>
  )
}

export default SideBarMenu