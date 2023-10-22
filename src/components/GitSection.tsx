import React from 'react'
import largeIcon from '../assets/logo_large.svg'
import smallIcon from '../assets/logo_small.svg'
import './GitSection.scss'
import Card from './atoms/Card'
import { useTranslation } from 'react-i18next';

const GitSection = () => {
  const { t } = useTranslation()
  return (
    <div className='gitSection'>
      <figure className='figure'>
        <img src={largeIcon} alt="" className='image' />
      </figure>
      {/* <Card title={t('githubTitle')} thumbnail={smallIcon}>
      </Card> */}
    </div>
  )
}

export default GitSection