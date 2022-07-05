import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log(data)
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <h1>rick and morty app</h1>
    </div>
  )
}

export default App
