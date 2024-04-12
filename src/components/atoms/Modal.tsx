import React from 'react'
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
  const handleClick = () => {
    onClose()
  }
  return (
    <>
      {isOpen ? (
        <article
          className="modalContainer"
          onClick={hadCard ? handleClick : undefined}
        >
          <section className="card-modal-section">
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
