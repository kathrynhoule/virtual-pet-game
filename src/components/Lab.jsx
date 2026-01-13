import React from 'react'
import EvolutionSelect from './EvolutionSelect'

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