import React from 'react'
import { useSelector } from 'react-redux'

const ReduxApp = () => {
    const count=useSelector((state)=>state.count)
    const koshu=()=>{
           dispatch({type:"plus"});
    };

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={koshu}>+</button>
      <button>-</button>
      <button>renter</button>
    </div>
  )
}

export default ReduxApp
