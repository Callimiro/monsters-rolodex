import React from 'react'
import './search-box.styles.css'

export  function SearchBox({placeholder,handleChange}) {
  return (
    
      <input className='search'
             type='search' 
             placeholder={placeholder} 
             onChange={handleChange}>

             </input>
    
  )
}
