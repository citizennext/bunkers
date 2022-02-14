import { ReactNode, forwardRef } from 'react'

interface Props {
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  children: ReactNode
  srLabel: string
  className: string
  onClick?: () => void
}
function ButtonIcon({ disabled = false, children, onClick, type = 'button', srLabel, className }: Props) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      <span className='sr-only'>{srLabel}</span>
      {children}
    </button>
  )
}
export { ButtonIcon }
