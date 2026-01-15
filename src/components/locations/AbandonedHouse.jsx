import React from 'react'

//need to actually do something with this
//like so far it just brings in the description data and that's it
//i'll figure it out later

const AbandonedHouse = ({ data }) => {
  return (
    <div>
        <p>{data.description}</p>
    </div>
  )
}

export default AbandonedHouse