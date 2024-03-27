import React, { useState } from 'react'
import './MainPage.scss'
import { useTranslation } from 'react-i18next'
import DescriptionSection from '../components/DescriptionSection'
import GitSection from '../components/GitSection'
import { Experience } from '../types/Expirience'

const MainPage = () => {
  const { t } = useTranslation()

  const [experiences] = useState<Experience[]>([
    {
      position: 'Freelance Software Developer',
      company: 'Proyecto de Plataforma de Reparto',
      technologies: [
        'React',
        'Capacitor',
        'Node.js',
        'Firestore',
        'GCP',
        'scss',
        'docker',
      ],
      // año_inicio: 2024,
      // año_fin: 'actualidad',
      description:
        'Desarrollo de una solución de reparto centrada en una PWA y una aplicación móvil, enfocada en optimizar la experiencia y eficiencia de los repartidores.',
    },
    {
      position: 'Freelance Software Developer',
      company: 'Proyecto de Plataforma de Reparto',
      technologies: [
        'React',
        'Capacitor',
        'Node.js',
        'Firestore',
        'GCP',
        'scss',
        'docker',
      ],
      // año_inicio: 2024,
      // año_fin: 'actualidad',
      description:
        'Desarrollo de una solución de reparto centrada en una PWA y una aplicación móvil, enfocada en optimizar la experiencia y eficiencia de los repartidores.',
    },
    {
      position: 'Freelance Software Developer',
      company: 'Proyecto de Plataforma de Reparto',
      technologies: [
        'React',
        'Capacitor',
        'Node.js',
        'Firestore',
        'GCP',
        'scss',
        'docker',
      ],
      // año_inicio: 2024,
      // año_fin: 'actualidad',
      description:
        'Desarrollo de una solución de reparto centrada en una PWA y una aplicación móvil, enfocada en optimizar la experiencia y eficiencia de los repartidores.',
    },
    {
      position: 'Freelance Software Developer',
      company: 'Proyecto de Plataforma de Reparto',
      technologies: [
        'React',
        'Capacitor',
        'Node.js',
        'Firestore',
        'GCP',
        'scss',
        'docker',
      ],
      // año_inicio: 2024,
      // año_fin: 'actualidad',
      description:
        'Desarrollo de una solución de reparto centrada en una PWA y una aplicación móvil, enfocada en optimizar la experiencia y eficiencia de los repartidores.',
    },
    {
      position: 'Freelance Software Developer',
      company: 'Proyecto de Plataforma de Reparto',
      technologies: [
        'React',
        'Capacitor',
        'Node.js',
        'Firestore',
        'GCP',
        'scss',
        'docker',
      ],
      // año_inicio: 2024,
      // año_fin: 'actualidad',
      description:
        'Desarrollo de una solución de reparto centrada en una PWA y una aplicación móvil, enfocada en optimizar la experiencia y eficiencia de los repartidores.',
    },
  ])
  return (
    <>
      <div className="mainContainer">
        <article className="title">
          <h1>Álvaro Andrade Ardiles</h1>
          <h2>{t('mainPageSubtitle')}</h2>
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
        {experiences.map((experience: Experience, i) => {
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
                  <hr />
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
