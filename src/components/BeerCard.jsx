import React from 'react'

const BeerCard = (props) => {

   let {name, tagline, description, image_url, abv, ibu} = props.beer

   let imgStyle = { backgroundImage: `url("${image_url}")` }

  return (
    <div className='card'>
        <span>{abv}%</span>
        <span>IBU: {ibu}</span>
        <div className='beer-img' style={imgStyle}></div>
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>{description}</p>
    </div>
  )
}

export default BeerCard