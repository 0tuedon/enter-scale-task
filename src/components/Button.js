import React from 'react'
import PropTypes from 'prop-types'
const Button = ({children,width,styles,click}) => {
  return (
    <button className={`bg-enterGreen
    ${width?width:'w-[201px]'} 
    flex items-center 
            text-[18px] font-semibold
            text-white
            px-[10px]
            justify-center
            gap-x-[20px]
            h-[51px] rounded-[10px]
    ${styles}
  `}>
        {children}
    </button>
  )
}

Button.propTypes = {
    children:PropTypes.node.isRequired,
    width:PropTypes.string,
    styles:PropTypes.string,
    click:PropTypes.func
}
export default Button