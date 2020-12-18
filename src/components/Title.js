import React from 'react';

export default function Title( { name, title }) { //passing 2 props
  return (
    <div className='row'>
      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1 className='titlenormal'>
          <p className='text-grey'>{ name }</p> 
          <p className='text-grey'> { title }</p>
        </h1>
      </div>
    </div>
  )
}
