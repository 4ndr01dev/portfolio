import React from 'react'
import './Card.scss'
interface cardProps {
    title: string
    children: React.ReactNode
}
const Card = (props: cardProps) => {
    return (
        <div className='technologiesCard'>

            <h3>
               {props.title}

            </h3>
            {props.children}
        </div>
    )
}

export default Card