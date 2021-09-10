import { useState } from 'react'
import { Sort } from '@material-ui/icons'
function ToggleSidebar() {
  const [activeMenu, setActiveMenu] = useState(false)
  const changeActive = () => {
    setActiveMenu(!activeMenu)
  }

  return(
    <div className={`toggleSidebar${activeMenu == true ? ' open' : ''}`}>
      <button className="toggleTrigger" onClick={ changeActive }>
        <Sort style={{
          transform: 'rotateY(180deg)',
          color: 'white',
          fontSize: '32px'
        }}/>
      </button>
      <div className="sideMenuWrap">
        <ul className="sideMenu">
          <li><a href="/tech">Teknologi Informasi</a></li>
          <li><a href="">Digital Marketing</a></li>
          <li><a href="">DMKademy</a></li>
          <li><a href="">Property</a></li>
        </ul>
      </div>
    </div>
  )
}
export default ToggleSidebar