import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = ({text})=>{
  return (
    <button className='btn'>按钮{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.any
}

export default Button