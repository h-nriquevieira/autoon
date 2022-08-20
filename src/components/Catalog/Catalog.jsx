import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import data from '../../data.json'
import './Catalog.css'

function Catalog() {
  const [filter, setFilter] = useState('')

  const filteredData = data.filter(car => {
    let model = car.model.toLowerCase();
    return model.includes(filter)
  })

  
  const carNodes = filter.length > 0 ? 
                      filteredData.map(car => <Card info={car} />) 
                    : data.map(car => <Card info={car} />)

  function handleChange(e) {
    setFilter(e.target.value)
    console.log(filter)
  }

  return (
      <main className='catalog'>
        <Banner />
        <div className="cards-container">
            <p className='cards-container--title'>Confira nosso catálogo</p>
            <input type="text" placeholder='Pesquisar' value={filter} onChange={(e) => handleChange(e)} />
            <div className="cards-container--inner">
                {carNodes}
            </div>
        </div>
      </main>
  );
}

export default Catalog;