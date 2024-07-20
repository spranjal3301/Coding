import React from 'react'

//-Server Side Loading component :
//?Only make sense for Server side aync component
export default function Loading() {
  return (
    <div className='flex w-full h-screen justify-center items-center animate-spin size-10'>
      <div className='size-10'>
        ?
      </div>
      </div>
  )
}
