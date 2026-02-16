import { useState } from 'react'
import './App.css'
import FlowerSelector from './components/FlowerSelector'
import MessageEditor from './components/MessageEditor'
import BouquetPreview from './components/BouquetPreview'
import { flowers } from './data/flowers'
import { templates } from './data/templates'

function App() {
  const [currentPage, setCurrentPage] = useState('flower-selection')
  const [selectedFlowers, setSelectedFlowers] = useState(null)
  const [message, setMessage] = useState(null)

  const handleFlowersSelected = (flowerArray) => {
    setSelectedFlowers(flowerArray)
    setCurrentPage('message-editor')
  }

  const handleMessageConfirm = (messageData) => {
    setMessage(messageData)
    setCurrentPage('preview')
  }

  const handleStartOver = () => {
    setSelectedFlowers(null)
    setMessage(null)
    setCurrentPage('flower-selection')
  }

  const handleBackFromMessage = () => {
    setCurrentPage('flower-selection')
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌸 Digital Bouquet Creator 🌸</h1>
      </header>

      <main className="app-main">
        {currentPage === 'flower-selection' && (
          <FlowerSelector
            flowers={flowers}
            templates={templates}
            onFlowersSelected={handleFlowersSelected}
          />
        )}

        {currentPage === 'message-editor' && (
          <MessageEditor
            onMessageConfirm={handleMessageConfirm}
            onBack={handleBackFromMessage}
          />
        )}

        {currentPage === 'preview' && selectedFlowers && message && (
          <BouquetPreview
            selectedFlowers={selectedFlowers}
            message={message}
            flowers={flowers}
            onStartOver={handleStartOver}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Create beautiful digital bouquets with love 💐</p>
      </footer>
    </div>
  )
}

export default App
