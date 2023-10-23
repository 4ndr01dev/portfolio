import React, { useState } from 'react'
import i18n from "i18next";
import './navbar.scss'

const Navbar = () => {

  const [englishSelected, setEnglishSelected] = useState<boolean>(false)
  const selectingLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {

    setEnglishSelected(event.target.checked)
    if (event.target.checked) {
          i18n.changeLanguage('en')
    }
    else {

          i18n.changeLanguage('es')
    }


  }

  return (
    <>
      <header>
        <figure>
          logo
        </figure>
        <nav>
          <ul>
            <li>
              item
          {englishSelected}
            </li>
          </ul>
        </nav>
        <form >
          English
          <input type="checkbox"  checked={englishSelected} onChange={e => selectingLanguage(e)} /> Español
        </form>
      </header>
    </>
  )
}

export default Navbar