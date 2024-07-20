"use client"


export default function Error(
  {error,reset}:{error:Error;reset:()=>void}
){
  return (
    <>
    <button onClick={reset}>Try Again</button>
    <div>{error.message}</div>
    </>
  )
}
