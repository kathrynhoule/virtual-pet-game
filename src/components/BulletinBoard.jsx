import React from 'react'

const BulletinBoard = ({ data}) => {
  return (
    <div>
        <p>{data.description}</p>
    </div>
  )
}

export default BulletinBoard