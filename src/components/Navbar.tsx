import React, { useState } from 'react'
import i18n from "i18next";
const Navbar = () => {
  enum Languages{
    Spanish,
    English
  } 
  const [selectedLanguage, setSelectedLanguage]= useState<Languages>(Languages.Spanish)
  const selectingLanguage = (event: React.ChangeEvent<HTMLInputElement>)=>{
    let newLanguage = parseInt(event.target.value) 
    setSelectedLanguage(newLanguage)
    switch (newLanguage) {
      case Languages.Spanish:
        i18n.changeLanguage('es')
        break;
        case Languages.English:
        console.log(parseInt(event.target.value))
        i18n.changeLanguage('en')
        break;
    
      default:
        break;
    }
    return
  }

  return (
    <>
    <div>Navbar</div>
    <form >
    <input type="radio" name='spanish' value={Languages.Spanish} checked={selectedLanguage === Languages.Spanish} onChange={e=>selectingLanguage(e)}/> Español
    <input type="radio" name='english'  value={Languages.English} checked={selectedLanguage === Languages.English} onChange={e=>selectingLanguage(e)}/> English
    </form>
    <p>Selected</p>
    {selectedLanguage}
    </>
  )
}

export default Navbar