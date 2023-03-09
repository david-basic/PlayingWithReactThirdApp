import React from 'react'

import styleClasses from './Card.module.css'

const Card = (props) => {
  return (
    <div className={`${props.className} ${styleClasses.card}`}>
        {props.children}
    </div>
  );
}

export default Card