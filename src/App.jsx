import './App.css'
import Character from './components/Character'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className="App bg-dark text-white">
      <Navbar />
      <Character />
      <CharacterList />
      <Footer />

    </div>
  )
}

export default App
