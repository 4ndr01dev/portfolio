import React from 'react'
import './Card.scss'

interface cardProps {
    title?: string
    children: React.ReactNode
    thumbnail?: string
    isClickable?: boolean
    isModal?: boolean
    hasHeader?: boolean
    onClick?: () => void
}

const Card = ({
    title,
    children,
    thumbnail,
    isClickable = false,
    isModal = false,
    hasHeader = true,
    onClick }: cardProps) => {
    return (
        // className = { isClickable? 'card_component_container clickableCard': 'card_component_container ' }
        <div onClick={onClick} className={`card_component_container
         ${isClickable ? 'clickableCard' : ''} 
        ${isModal ? 'modal_card' : ''}`} >
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