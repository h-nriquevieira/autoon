import React from 'react';
import './Banner.css'

function Banner() {
  return (
      <div className='banner'>
          <h2 className='banner--title'>A melhor escolha para comprar seu carro online.</h2>
          <p className='banner--subtitle'>Nossa equipe está pronta para realizar o seu sonho.</p>
          <button className='banner--button'><a className='banner--link' href="https://api.whatsapp.com/send/?phone=%2B5515991441485">Envie uma mensagem</a></button>
      </div>
  );
}

export default Banner;