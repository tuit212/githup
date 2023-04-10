import React from 'react'
import Left from '../../Pages/Main/Left'
import Right from '../../Pages/Main/Right'
import './main.scss'

const Main = () => {
  return (
    <main className='main-section'>
      <Left/>
      <Right/>
    </main>
  )
}

export default Main