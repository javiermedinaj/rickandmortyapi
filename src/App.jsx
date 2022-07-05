import './App.css'
import Character from './components/Character'
import CharacterList from './components/CharacterList'

function App() {


  return (
    <div className="App bg-dark text-white">
      <h1>Rick and morty app</h1>
      <Character />
      <CharacterList />


    </div>
  )
}

export default App
