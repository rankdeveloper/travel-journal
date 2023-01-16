import React from 'react'
import Navbar from './components/Navbar'
import './style.css'
import data from './data';
import Card from './components/Card'

const cards = data.map((item) => {
  return <Card key={item.title} item={item} />
})
export default function App() {

  return (
    <div className='main'>
      <Navbar />

      <div className='cards'>
        {cards}
      </div>
    </div>
  )
}
