import React from 'react'
import './Card.scss'
interface cardProps {
    title: string
    children: React.ReactNode
    thumbnail?: string;
}
const Card = (props: cardProps) => {
    return (
        <div className='technologiesCard'>
            <header className='header'>
            {
                props.thumbnail ?
                    <figure className='icon' > 
                        <img src={props.thumbnail} alt="" className='image'/>
                    </figure>
                    :
                    ''
            }

                <h3>
                    {props.title}
                    
                </h3>
            </header>
            {props.children}
        </div>
    )
}

export default Card