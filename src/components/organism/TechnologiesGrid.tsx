import React from 'react'
import { Technology } from '../../types/Technologies'
import DarkCard from '../molecules/DarkCard'
import './TechnologiesGrid.scss'
import Budget from '../atoms/Budget'

interface TechnologiesGridProps {
  technologies: Technology[]
}
const TechnologiesGrid = ({ technologies }: TechnologiesGridProps) => {
  return (
    <>
      <nav className="technologies_navigation">
        <ul>
          <li>
            <h3>Frontend</h3>
          </li>
          <li>
            <h3>Backend</h3>
          </li>
          <li>
            <h3>Others</h3>
          </li>
          <li>
            <h3>all</h3>
          </li>
        </ul>
      </nav>
      <main>
        <section className="technologies_section_container">
          {technologies.map((technology: Technology, i) => {
            return (
              <DarkCard
                key={i}
                title={technology.name}
                subtitle={technology.description}
                image={
                  technology.imageLocal
                    ? technology.imageLocal
                    : technology.imageUrl
                }
                footerComponent={
                  technology.favorite ? <div>is favorite</div> : undefined
                }
                budget={
                  technology.hasCertify ? (
                    <Budget> Certified</Budget>
                  ) : undefined
                }
              />
            )
          })}
        </section>
      </main>
    </>
  )
}

export default TechnologiesGrid
