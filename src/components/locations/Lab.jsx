import React from 'react'
import EvolutionSelect from './EvolutionSelect'

//so far it's just the evolution selection and description
//but i definitely want to add like a lab technician NPC or something
//and maybe some other functionality here so it's not just a one purpose only location

const Lab = ({ data }) => {
    return (
        <div>
        <p>{data.description}</p>

        <hr />
        
        <EvolutionSelect />
        </div>
    )
}

export default Lab