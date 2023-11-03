import React from 'react'
import { Technology } from '../../types/Technologies'
import './ImagesGrid.scss'
interface ImagesGridProps {
    technologies: Technology[];
}
const ImagesGrid = ({ technologies }: ImagesGridProps) => {
    return (
        <section className='containerImageGrid'>
            {
                technologies.map((technology, i) => {
                    const className = 'technologyFigure technologyFigure--' + (i + 1);
                    return (
                        <figure key={i} className={className}>
                            <img key={i} src={technology.imageUrl} alt="" className='technologyImage' />
                        </figure>
                    )
                })
            }
        </section>
    )
}

export default ImagesGrid