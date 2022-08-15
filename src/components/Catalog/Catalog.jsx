import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import data from '../../data.json'
import './Catalog.css'

function Catalog() {
  const carNodes = data.map(car => <Card info={car} />)

  return (
      <main className='catalog'>
        <Banner />
        <div className="cards-container">
            <p className='cards-container--title'>Confira nosso catálogo</p>
            <div className="cards-container--inner">
                {carNodes}
            </div>
        </div>
      </main>
  );
}

export default Catalog;