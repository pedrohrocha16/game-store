import React from 'react'

const Card = ({title, img}) => {
  return (
    <>
      <li className='lista_games_li'>
         <img src={img} alt="foto" />
         <h3>{title}</h3>
      </li>
    </>
  )
}

export default Card