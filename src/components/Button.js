import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, width, type, disabled, styles, click }) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      type={type ? type : 'button'}
      className={`
    ${width ? width : 'w-[201px]'} 
    flex items-center 
            text-[18px] font-semibold
            text-white
            px-[10px]
            ${
              disabled
                ? 'disabled:bg-gray-400 disabled:cursor-not-allowed'
                : 'bg-enterGreen'
            }
            justify-center
            gap-x-[20px]
            h-[51px] rounded-[10px]
    ${styles}
  `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  styles: PropTypes.string,
  click: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
