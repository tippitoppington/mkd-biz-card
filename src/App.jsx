import { useState } from 'react'

import Card1 from './components/Card1'
import Card2 from './components/Card2'

function App() {
  const [showCard1, setShowCard1] = useState(true)

  const toggleCard = () => {
    setShowCard1(!showCard1)
  }

  return (
    <div className='app'>
      <button
        onClick={toggleCard}
        className={showCard1 ? 'button-card1' : 'button-card2'}>
        Switch to {showCard1 ? 'Card 2' : 'Card 1'}
      </button>
      {showCard1 ? <Card1 /> : <Card2 />}
    </div>
  )
}

export default App
