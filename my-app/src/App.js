import React from 'react'
import Eventform from './components/Eventform'
import EventCard from "./components/EventCard";
import './App.css'
const events = []
function App() {
  const oneventAdded = (event) => {
    console.log(event)
  }
  return (
    <div>
      <Eventform eventAdded={oneventAdded}></Eventform>
      <EventCard/>
    </div>
  )
}

export default App
