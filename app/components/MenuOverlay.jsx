import React from 'react'
import Navlink from './Navlink'

export const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col sm:flex-row sm:justify-between py-2 items-center sm:mx-10'>
        {
            links.map((link, index) =>(
                <li key={index}><Navlink href={link.path} title={link.title} /></li>
            ))
        }
    </ul>
  )
}
