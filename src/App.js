import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';
import Descrition from './Descrition';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100
// https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword=Bitcoin&keyword=Ethereum&keywordOper=or&lang=eng&articlesSortBy=date&includeArticleConcepts=true&includeArticleCategories=true&articlesCount=5&apiKey=4b922c4f-e9fb-4433-b493-a613e6b166d1

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  // const [news, setNews] = useState([])

  useEffect(()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=100')
    .then(res=> {
      setCoins(res.data)
      console.log(res.data)
    }).catch(error=> console.log(error))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <Navbar />
      <Hero />
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder='Search' className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      <div className="coin-details">
        <p className='name'>Name</p>
        <p className='price'>Price</p>
        <p className='volume'>Volume</p>
        <p className='change'>24h Change</p>
        <p className='mktcap'>Mkt Cap</p>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          volume={coin.total_volume} 
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}/>
        )
      })}
      <Descrition />
      <Footer />
    </div>
  );
}

export default App;