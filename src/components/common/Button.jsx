import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent'
  }

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export default Button
