import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-2 ml-40 justify-center'>
       <Button button="All"/>
       <Button button="Music"/> 
       <Button button="Dance"/> 
       <Button button="Study"/> 
       <Button button="Politics"/> 
       <Button button="Games"/> 
       <Button button="Arts"/> 
       <Button button="Cooking"/> 
       <Button button="Cleaning"/>  
    </div>
  )
}

export default ButtonList