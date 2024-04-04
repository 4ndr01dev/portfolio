import React, { useState } from 'react'
import './MainPage.scss'
import { useTranslation } from 'react-i18next'
import DescriptionSection from '../components/organism/DescriptionSection'
import GitSection from '../components/organism/GitSection'
import { Experience } from '../types/Expirience'
import DarkCard from '../components/molecules/DarkCard'

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
      <div className="experience-container">
        {experiences.map((experience: Experience, i) => {
          return (

          <DarkCard key={i}  title={experience.position} subtitle={experience.company}/>
          )
        }
        )}
      </div>
    </>
  )
}

export default MainPage
