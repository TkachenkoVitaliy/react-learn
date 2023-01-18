import React from 'react';
import icons from '../assets/img/icons.svg';

const SvgIcon = ({iconId, color, size}) => (
   <svg fill={color} width={size} height={size}>
       <use href={`${icons}#${iconId}`} />
   </svg>
)

SvgIcon.defaultProps = {
   size: 30,
   color: 'black',
}

export default SvgIcon