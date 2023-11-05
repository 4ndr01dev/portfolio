import React from 'react'
import './MainPage.scss'
// import { useTranslation } from 'react-i18next';
import DescriptionSection from '../components/DescriptionSection';
import GitSection from '../components/GitSection';



const MainPage = () => {
  // const { t } = useTranslation()

  return (
    <main className='container'>

      <article className='title'>

        <h1>
          Transformando Ideas en Código
        </h1>

      </article>
      <article className='content'>
        <section className='description_section'>

        <DescriptionSection></DescriptionSection>
        </section>
        <section className='git_section'>

          <GitSection></GitSection>
        </section>
      </article>
    </main>
  )
}

export default MainPage