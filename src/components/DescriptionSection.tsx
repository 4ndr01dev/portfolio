import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './DescriptionSection.scss'
import Card from './atoms/Card'
import ImagesGrid from './atoms/ImagesGrid'
import { Technology } from '../types/Technologies'
import Modal from './atoms/Modal'
const DescriptionSection = () => {
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
    {
      name: 'Scrum',
      hasCertify: true,
      hasCourse: false,
      courses: [],
      description:
        'Scrum es un marco de trabajo para desarrollo ágil de software que enfatiza el trabajo en equipo, la iteración y la adaptabilidad.',
      index: 7,
      imageUrl:
        'https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png',
    },
    {
      name: 'Git',
      hasCertify: false,
      hasCourse: true,
      courses: [
        {
          Name: 'Git Complete: The definitive, step-by-step guide',
          school: 'Udemy',
          year: 2019,
        },
      ],
      description:
        'Git es un sistema de control de versiones distribuido, diseñado para manejar desde proyectos pequeños a muy grandes con rapidez y eficiencia.',
      index: 8,
      imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    },
    {
      name: 'CSS',
      hasCertify: false,
      hasCourse: true,
      courses: [
        {
          Name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
          school: 'Udemy',
          year: 2020,
        },
      ],
      description:
        'CSS es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en HTML o XML.',
      index: 9,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
    },
    {
      name: 'React',
      hasCertify: true,
      hasCourse: true,
      courses: [
        {
          Name: 'React - The Complete Guide',
          school: 'Udemy',
          year: 2022,
        },
      ],
      description:
        'React es una biblioteca de JavaScript para construir interfaces de usuario, mantenida por Facebook y una comunidad de desarrolladores.',
      index: 10,
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'Angular',
      hasCertify: false,
      hasCourse: true,
      courses: [
        {
          Name: 'Angular - The Complete Guide',
          school: 'Udemy',
          year: 2021,
        },
      ],
      description:
        'Angular es un marco de trabajo para aplicaciones web desarrollado por Google, que utiliza TypeScript como principal lenguaje de programación.',
      index: 11,
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      name: 'STRAPI',
      hasCertify: false,
      hasCourse: false,
      courses: [],
      description:
        'STRAPI es un sistema de gestión de contenido (CMS) de código abierto basado en Node.js, que ofrece APIs REST y GraphQL.',
      index: 12,
      imageUrl: 'https://strapi.io/assets/strapi-logo-light.svg',
    },
    {
      name: 'Postgres',
      hasCertify: false,
      hasCourse: true,
      courses: [
        {
          Name: "SQL and PostgreSQL: The Complete Developer's Guide",
          school: 'Udemy',
          year: 2021,
        },
      ],
      description:
        'Postgres, también conocido como PostgreSQL, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.',
      index: 13,
      imageUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    },
    {
      name: 'Docker',
      hasCertify: false,
      hasCourse: true,
      courses: [
        {
          Name: 'Docker Mastery: with Kubernetes +Swarm from a Docker Captain',
          school: 'Udemy',
          year: 2020,
        },
      ],
      description:
        'Docker es una plataforma de software que permite la creación, prueba e implementación de aplicaciones rápidamente a través de contenedores de software.',
      index: 15,
      imageUrl:
        'https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png',
    },
  ])
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)
  const buttonHandler = async () => {
    const response = await fetch('http://localhost:8000/test', { method: 'GET' })
    console.log(response.ok)
    if (!response.ok) {
      alert(
        'Ha ocurrido un error al intentar descargar el archivo. Inténtelo nuevamente mas tarde',
      )
    }
    const pdfFile = await response.blob()
    console.log(pdfFile.size)
    downloadBlobPdfFile(pdfFile, getFileName())
    // TODO hacer que esta función se encargue de descargar el blob
  }
  const downloadBlobPdfFile = (file: Blob, fileName: string) => {
    // TODO pasar a carpeta utils
    console.log(file)
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(file)

    link.setAttribute('download', fileName)

    document.body.appendChild(link)
    link.click()
  }
  const getFileName = () => {
    return 'cv_alvaro_andrade_2023_fs.pdf'
  }
  const closeModalHandler = () => {
    setModalIsOpen(false)
  }
  const handleCardClick = () => {
    setModalIsOpen(true)
  }
  return (
    <section className="profile">
      <div className="button">
        <a href="#" onClick={buttonHandler}>
          {t('cv')}
        </a>
      </div>
      <div className="description">
        <p>{t('description')}</p>
      </div>

      <div className="technologies">
        <Card
          title={t('technologyTitle')}
          isClickable={true}
          onClick={handleCardClick}
        >
          <article className="technology_card_article">
            <section className="technologiesContent">
              <div className="imageGridSection">
                <ImagesGrid technologies={technologies}></ImagesGrid>
              </div>
              <div className="technologyDescription">
                <h4>{t('technologySubtitle')}</h4>
                <p>{t('technologyDescription')}</p>
              </div>
            </section>
          </article>
        </Card>
        <Modal onClose={closeModalHandler} isOpen={modalIsOpen}>
          <section className="technologies_section_container">
            {technologies.map((technology: Technology, i) => {
              return (
                <section key={i} className="technology-section-container">
                  <section className="technology-section-card">
                    <article className="technology-article-card">
                      <figure key={i} className="technology-figure-modal">
                        <img
                          key={i}
                          src={technology.imageUrl}
                          alt=""
                          className="technology-image-modal"
                        />
                      </figure>
                      <div className="technology-description">
                        {/* description */}
                        <div>
                          <h2>{technology.name}</h2>
                          <p>tiempo de desarrollo</p>
                        </div>
                        <div>
                          <p>{technology.description}</p>
                        </div>
                        <footer>
                          <a href="google.com"> certified</a>
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
              )
            })}
          </section>
        </Modal>
      </div>
    </section>
  )
}

export default DescriptionSection
