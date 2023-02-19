import React from 'react'
import Counter from './Counter'
// import RicoPic from './../assets/Rico.avif'
// import JuliusPic from './../assets/Julius.avif'
// import CornflakePic from './../assets/Cornflake.avif'

function PetCard({name, image, caption}) {
  return (
    <div class="petcard" style={{ border: '3px solid black', borderRadius: '1em', width: 300}}>
        <h2>{name}</h2>
        <Counter style={{border: '3px solid black'}}/>
        <img src={image} width={250} height='auto' style={{ border: '3px solid black'}}/>
        <p> Pictured: {name}, {caption}</p>
        
    </div>
  )
}

export default PetCard