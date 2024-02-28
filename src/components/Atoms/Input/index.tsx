import React from 'react'
import './style.scss'

const Input = ({label, handleChange, value, name}:{label:string, value:string,  name:string, handleChange:(e:React.ChangeEvent<HTMLInputElement>)=> void}) => {
  return (
    <div className='input-wrapper'>
        <label htmlFor="input-wrapper">{label}</label>
        <br />
      <input type="text" id='input' value={value} name={name} onChange={handleChange}/>
    </div>
  )
}

export default Input
