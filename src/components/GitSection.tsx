import React from 'react'
import largeIcon from '../assets/logo_large.svg'
import './GitSection.scss'
const GitSection = () => {
  return (
    <div className='gitSection'>
      <figure className='figure'>
        <img src={largeIcon} alt="" className='image' />
      </figure>
      <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
      <div className="github-card" data-github="4ndr01dev" data-width="400" data-height="151" data-theme="default"></div>
    </div>
  )
}

export default GitSection