import React, { useEffect, useRef } from 'react'
import './Modal.scss'
import Card from '../molecules/Card'

interface modalProps {
  hadCard?: boolean
  isOpen?: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({
  hadCard = true,
  isOpen = false,
  onClose,
  children,
}: modalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  })
  const handleClick = () => {
    console.log('adentro')
  }
  return (
    <>
      {isOpen ? (
        <article className="modalContainer">
          <section
            className="card-modal-section"
            ref={modalRef}
            onClick={hadCard ? handleClick : undefined}
          >
            <Card hasHeader={false} isModal={true}>
              {children}
            </Card>
          </section>
        </article>
      ) : (
        ''
      )}
    </>
  )
}

export default Modal
