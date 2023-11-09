import React from 'react'
import './Card.scss'
interface cardProps {
    title?: string
    children: React.ReactNode
    thumbnail?: string;
    isClickable?: boolean
    hasHeader?: boolean
    onClick?: () => void
}
const Card = ({
    title,
    children,
    thumbnail,
    isClickable = false,
    hasHeader = true,
    onClick }: cardProps) => {
    return (
        <div className={isClickable ? 'card_component_container clickableCard' : 'card_component_container '} onClick={onClick} >
            {
                hasHeader ?
                    <header className='header'>
                        {
                            thumbnail ?
                                <figure className='icon' >
                                    <img src={thumbnail} alt="" className='image' />
                                </figure>
                                :
                                ''
                        }
                        <h3>
                            {title}
                        </h3>
                    </header>
                    : ''
            }
            {children}
        </div>
    )
}

export default Card