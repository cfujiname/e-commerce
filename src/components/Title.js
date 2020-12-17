const { FormCheck } = require("react-bootstrap");

import React from 'react'

export default function Title( { name, title }) { //passing 2 props
  return (
    <div className='row'>
      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1 className='text-capitalize font-weight-bold'>
        { name } <strong className='text-black'> { title }</strong>
        </h1>
      </div>
    </div>
  )
}
