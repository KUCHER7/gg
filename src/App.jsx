import React, { useState } from 'react';
import ExchangeRate from './ExchangeRate';
import BuyCrypto from './BuyCrypto';
import './styles.css';

function App() {
  const [view, setView] = useState('home');

  return (
    <div className="app">
      <header className="header">
        <h1>Крипто Обменник</h1>
      </header>
      <nav className="menu">
        <button onClick={() => setView('exchangeRate')}>Курс валют</button>
        <button onClick={() => setView('buyCrypto')}>Купить крипту</button>
      </nav>
      <main>
        {view === 'exchangeRate' && <ExchangeRate />}
        {view === 'buyCrypto' && <BuyCrypto />}
      </main>
    </div>
  );
}

export default App;