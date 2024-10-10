import React from 'react'
import { Link } from 'react-router-dom'
function Button(props) {
  return (
    <Link to={props.link} className='cursor-pointer duration:300 hover:text-white hover:bg-[#2e8b70] p-3 border-[2px] border-[#2e8b70] text-[#965a1a] max-sm:text-sm text-xl'>{props.text}</Link >
  )
}

export default Button
