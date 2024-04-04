import React from 'react' //,  { FC, SVGProps }
import Budget from '../atoms/Budget'
import './DarkCard.scss'
// FC<SVGProps<SVGElement>>
interface DarkCardProps {
  key?: number
  title?: string
  subtitle?: string
  content?: string
  image?: string
}

const DarkCard = ({ key = 1, title, image, subtitle }: DarkCardProps) => {
  return (
    <article key={key} className="dark-card-content">
      <section className="dark-card-section-container">
        <section className="section-card">
          <article className="article-card">
            {image ? (
              <figure className="figure-modal">
                <img src={image} className="image-modal" />
              </figure>
            ) : (
              ''
            )}
            <div className="description">
              <div>
                {title ? <h2>{title}</h2> : ''}

                <p>{subtitle}</p>
              </div>
              <div>
                <p>{}</p>
              </div>
              <footer>
                <Budget>Certified</Budget>
              </footer>
            </div>
          </article>
          <hr />
          <footer className="card-footer">
            <div>grid image</div>
            <div>preferencia</div>
          </footer>
        </section>
      </section>
    </article>
  )
}

export default DarkCard
