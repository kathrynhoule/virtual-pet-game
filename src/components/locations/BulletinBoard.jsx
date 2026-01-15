import React from 'react'

//same as abandoned house comments

const BulletinBoard = ({ data}) => {
  return (
    <div>
        <p>{data.description}</p>
    </div>
  )
}

export default BulletinBoard