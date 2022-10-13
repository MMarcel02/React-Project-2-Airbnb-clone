import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardsData from './cardsData'

function App() {
  const cards = cardsData.map(item => { 
    return (
      <Card
        key={item.key}
        {...item}
    />)
  })
  return (
    <>
      <NavBar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      
    </>
  )
}

export default App
