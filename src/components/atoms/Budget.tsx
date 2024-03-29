import React from 'react'

import './Budget.scss'

interface budgetProps {
  children: React.ReactNode
}

const Budget = ({ children }: budgetProps) => {
  return (
    <section className="budget_container">
      <figure className="budget_figure">☁️</figure>
      <p className="budget_text"> {children}</p>
    </section>
  )
}

export default Budget
