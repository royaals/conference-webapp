import React from 'react'

const Meeting = ({params}: {params: {id:string}}) => {
  return (
    <div>
      meeting page : {params.id}
    </div>
  )
}

export default Meeting
