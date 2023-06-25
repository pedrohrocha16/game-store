import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Loader from './components/layout/Loader'
import NavBar from './components/layout/NavBar'


function App() {

  const [games, setGames] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [search, setSearch] = useState("")

  const searchLowerCase = search.toLowerCase()

  const jogos = games.filter((jogo) => jogo.title.toLowerCase().includes(searchLowerCase));
  
  useEffect(() => {
    fetch("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", {
    method:"GET",
    headers: {
      'dev-email-address': 'pedro_6568@hotmail.com',
      'Content-Type':'application/json'
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      setGames(data)
      setRemoveLoading(true)
    })
    .catch((err) => console.log(err))
  }, [])
  
  return (
    <div>
      <NavBar
        onChange={(e) => setSearch(e.target.value)}
        />
        {!removeLoading && <Loader />}
          <ul className='lista_games'>
            {jogos.map((game) => (
              <div key={game.id}>
                <Card
                  id={game.id}
                  title={game.title}
                  img={game.thumbnail}
                />
              </div>
            ))}
          </ul>
    </div>
  )
}

export default App
