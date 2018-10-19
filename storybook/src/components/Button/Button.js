import React from 'react'
import styles from './Button.module.css'
import propTypes from 'prop-types'

const Button = ({ children, className, isLoading, ...props }) => {
  const classNames = (...args) => args.join(' ')
  const buttonClass = classNames(styles.button, className)
  return <button className={buttonClass} {...props}>{isLoading ? 'Loading...' : children}</button>
}

Button.propTypes = {
  /** Show button loading state */
  isLoading: propTypes.bool
}

Button.defaultProps = {
  isLoading: false
}

export default Button
