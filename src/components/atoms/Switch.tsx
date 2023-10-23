import React from 'react'
import './Switch.scss'

interface SwitchProps {
    isChecked?: boolean;
    onToggle: () => void;
}
const Switch: React.FC<SwitchProps> = ({ isChecked = false, onToggle }) => {

    return (
        <section className='switchSection'>
            <p>
                Español
            </p>
            <div className={`switch ${isChecked ? 'checked' : ''}`} onClick={onToggle}>
                <div className='switch-handle'></div>
            </div>
            <p>
                English
            </p>
        </section>
    )
}

export default Switch