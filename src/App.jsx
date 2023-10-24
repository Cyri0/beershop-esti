import React, {useState, useEffect} from 'react'
import BeerCard from './components/BeerCard'

const App = () => {
  const [beers, setBeers] = useState([])

  useEffect(()=>{
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(data => setBeers(data))
  },[])

  return (
    <div>
      <h1>BeerShop</h1>
      <div className="beers">
         { beers.map((beer, idx) => <BeerCard key={idx} beer={beer} />) }
      </div>
    </div>
  )
}

export default App