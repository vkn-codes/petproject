import React from 'react'
import { nanoid } from 'nanoid';
import PetCard from './PetCard';

function List({ items= []}) {
  return (
    <>
    <h1>Pet Home Project</h1>
    
    <div className="pet-wrapper">
    <ul>
        {items.map((pet) =>(
            <PetCard key={nanoid()} {...pet}/>
        ))}
    </ul></div>
    </>
  )
}

export default List