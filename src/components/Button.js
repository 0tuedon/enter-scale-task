import React from 'react'
import PropTypes from 'prop-types'
const Button = ({children,width,styles}) => {
  return (
    <button className={`bg-enterGreen
    ${width?width:'w-[201px]'} ${styles}
  `}>
        {children}
    </button>
  )
}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    width:PropTypes.string,
    styles:PropTypes.string
}
export default Button