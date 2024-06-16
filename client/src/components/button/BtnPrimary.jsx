import React from 'react'

const BtnPrimary = ({title, type,onclick}) => {
  return (
    <button type={type} onClick={onclick} className='btn-primary'>{title}</button>
  )
}

export default BtnPrimary