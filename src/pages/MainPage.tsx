import React, { useState } from 'react'
// import React from 'react'
import './MainPage.scss'
import { useTranslation } from 'react-i18next'
import DescriptionSection from '../components/DescriptionSection'
import GitSection from '../components/GitSection'
import { Technology } from '../types/Technologies'

const MainPage = () => {
  const { t } = useTranslation()
  const [technologies] = useState<Technology[]>([
    {
      name: 'Vue',
      hasCertify: true,
      hasCourse: true,
      courses: [
        {
          Name: 'Advanced Vue Techniques',
          school: 'Udemy',
          year: 2021,
        },
      ],
      description:
        'Vue.js es un framework progresivo para construir interfaces de usuario.',
      index: 1,
      imageUrl: 'https://vuejs.org/images/logo.png',
    },
    {
      name: 'Fast-api',
      hasCertify: true,
      hasCourse: true,
      courses: [
        {
          Name: 'FastAPI for Web Development',
          school: 'Coursera',
          year: 2022,
        },
      ],
      description:
        'FastAPI es un moderno y rápido framework web para construir APIs con Python.',
      index: 2,
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
    },
    {
      name: 'Flutter',
      hasCertify: true,
      hasCourse: true,
      courses: [
        {
          Name: 'Flutter Development Bootcamp',
          school: 'Udemy',
          year: 2021,
        },
      ],
      description:
        'Flutter es un framework de UI de código abierto creado por Google para la creación de aplicaciones para móviles, web y escritorio.',
      index: 3,
      imageUrl:
        'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg',
    },
    {
      name: 'Python',
      hasCertify: true,
      hasCourse: true,
      courses: [
        {
          Name: 'Python for Data Science',
          school: 'Coursera',
          year: 2020,
        },
      ],
      description:
        'Python es un lenguaje de programación de alto nivel, interpretado, con semántica dinámica.',
      index: 4,
      imageUrl:
        'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg',
    },
    {
      name: 'JavaScript',
      hasCertify: true,
      hasCourse: true,
      courses: [
        {
          Name: 'JavaScript: Understanding the Weird Parts',
          school: 'Udemy',
          year: 2019,
        },
      ],
      description:
        'JavaScript es un lenguaje de programación ligero, interpretado, o compilado justo a tiempo con funciones de primera clase.',
      index: 5,
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    },
    {
      name: 'MySQL',
      hasCertify: false,
      hasCourse: true,
      courses: [
        {
          Name: 'MySQL for Beginners',
          school: 'Udemy',
          year: 2021,
        },
      ],
      description:
        'MySQL es un sistema de gestión de bases de datos relacional, basado en lenguaje SQL.',
      index: 6,
      imageUrl:
        'https://icons.veryicon.com/png/o/system/inspur-cloud-icon/rds-mysql.png',
    },
  ])
  return (
    <>
      <div className="mainContainer">
        <article className="title">
          <h2>Álvaro Andrade Ardiles</h2>
          <h1>{t('mainPageSubtitle')}</h1>
        </article>
        <article className="content">
          <section className="description_section">
            <DescriptionSection></DescriptionSection>
          </section>
          <section className="git_section">
            <GitSection></GitSection>
          </section>
        </article>
      </div>
      <div className="technologyContainer">
        {technologies.map((technology: Technology, i) => {
          return (
            <article key={i} className="technologyContent">
              <section className="technology-section-container">
                <section className="technology-section-card">
                  <figure className="technology-figure-modal">
                    <img alt="" className="technology-image-modal" />
                  </figure>
                  <article className="technology-article-card">
                    <div className="technology-description">
                      <div>
                        <h2>{}</h2>
                        <p>tiempo de desarrollo</p>
                      </div>
                      <div>
                        <p>{}</p>
                      </div>
                      <footer>
                        <a href=""> certified</a>
                      </footer>
                    </div>
                  </article>
                  <div>
                    <hr />
                  </div>
                  <footer className="technology-card-footer">
                    <div>grid image</div>
                    <div>preferencia</div>
                  </footer>
                </section>
              </section>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default MainPage
