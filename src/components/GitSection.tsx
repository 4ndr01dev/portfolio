import React from 'react'
import largeIcon from '../assets/logo_large.svg'
import smallIcon from '../assets/logo_small.svg'
import './GitSection.scss'
import Card from './atoms/Card'
import { useTranslation } from 'react-i18next'

const GitSection = () => {
  const { t } = useTranslation()
  const redirectToGithub = () => {
    window.open('https://github.com/4ndr01dev', '_blank')
  }
  return (
    <div className="gitSection">
      <figure className="git_figure">
        <img src={largeIcon} alt="" className="image" />
      </figure>
      <section className="card_section">
        <Card
          title={t('githubTitle')}
          thumbnail={smallIcon}
          isClickable={true}
          onClick={redirectToGithub}
        >
          github.com
        </Card>
      </section>
    </div>
  )
}

export default GitSection
