import './App.css'
import Character from './components/Character'
import CharacterList from './components/CharacterList'
import Footer from './components/Footer'


function App() {


  return (
    <div className="App bg-dark text-white">

      <Character />
      <CharacterList />
      <Footer />

    </div>
  )
}

export default App
