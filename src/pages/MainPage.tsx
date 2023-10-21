import React from 'react'
import './MainPage.scss'
import { useTranslation } from 'react-i18next';
import DescriptionSection from '../components/DescriptionSection';



const MainPage = () => {
  const { t } = useTranslation()

  return (
    <main className='container'>MainPage

      <article className='title'>

        <h1>
          Álvaro Andrade Ardiles
        </h1>

      </article>
      <article className='content'>
        <DescriptionSection></DescriptionSection>
        <section>imagen git</section>
      </article>

      <h2>
        {t("welcome")}
      </h2>
    </main>
  )
}

export default MainPage