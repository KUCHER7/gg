import React, { useEffect, useState } from 'react';

function ExchangeRate() {
  const [rates, setRates] = useState({
    BTC: 0,
    ETH: 0,
    USDT: 0,
  });

  useEffect(() => {
    // Имитация обновления курса
    const interval = setInterval(() => {
      setRates({
        BTC: (Math.random() * 50000 + 20000).toFixed(2),
        ETH: (Math.random() * 3000 + 1000).toFixed(2),
        USDT: 1,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="exchange-rate">
      <h2>Курс валют</h2>
      <ul>
        <li>Bitcoin (BTC): ${rates.BTC}</li>
        <li>Ethereum (ETH): ${rates.ETH}</li>
        <li>Tether (USDT): ${rates.USDT}</li>
      </ul>
    </div>
  );
}

export default ExchangeRate;