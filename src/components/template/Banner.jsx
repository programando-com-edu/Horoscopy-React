import { useState } from 'react'

function Banner({ srcImage }) {
    const estaNaHome = "/home" == window.location.pathname ? (
        <div>
            Estou na home
        </div>
      ) : null

    return (
        <img src={srcImage}/>)
    
  }
  
  export default Banner
  