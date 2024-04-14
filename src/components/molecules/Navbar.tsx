import React, { useState } from 'react'
import i18n from 'i18next'
import './navbar.scss'
import smallIcon from '../../assets/logo_small.svg'
import Switch from '../atoms/Switch'

const Navbar = () => {
  const [englishSelected, setEnglishSelected] = useState<boolean>(false)

  const newSetEnglishSelected = () => {
    setEnglishSelected(!englishSelected)
    if (!englishSelected) {
      i18n.changeLanguage('en')
      return
    }
    i18n.changeLanguage('es')
  }

  return (
    <>
      <header className="nav_bar_container">
        <figure className="figure">
          <img src={smallIcon} alt="" className="image" />
        </figure>

        <Switch
          isChecked={englishSelected}
          onToggle={newSetEnglishSelected}
        ></Switch>
      </header>
    </>
  )
}

export default Navbar
