import React, { useState } from 'react'
import i18n from "i18next";
import './navbar.scss'
import smallIcon from '../assets/logo_small.svg'
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
        <figure className='figure'>
          <img src={smallIcon} alt="" className='image' />
        </figure>
        {/* <nav>
          <ul>
            <li>
              item
            </li>
          </ul>
        </nav> */}
        <form className="switch" >
          English
          <input type="checkbox"  checked={englishSelected} onChange={e => selectingLanguage(e)} /> Español
        </form>
        

        {/* <div className="switch">
          <div className="switch__label-container">
            <input id="switch-1" type="checkbox" checked={englishSelected} onChange={e => selectingLanguage(e)} />
              <label className="switch__label" htmlFor="switch-1"></label>
          </div>
        </div> */}
      </header>
    </>
  )
}

export default Navbar