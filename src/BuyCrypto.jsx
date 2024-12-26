import React, { useState } from 'react';

function BuyCrypto() {
  const [formData, setFormData] = useState({
    wallet: '',
    phone: '',
    firstName: '',
    lastName: '',
    currency: 'BTC',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Ваша заявка принята!');
  };

  const isFormComplete =
    formData.wallet &&
    formData.phone &&
    formData.firstName &&
    formData.lastName;

  return (
    <div className="buy-crypto">
      <h2>Купить криптовалюту</h2>
      <form>
        <label>
          Адрес кошелька:
          <input
            type="text"
            name="wallet"
            value={formData.wallet}
            onChange={handleChange}
            placeholder="Введите адрес кошелька"
          />
        </label>
        <label>
          Номер телефона:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Введите номер телефона"
          />
        </label>
        <label>
          Имя:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Введите имя"
          />
        </label>
        <label>
          Фамилия:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Введите фамилию"
          />
        </label>
        <label>
          Выберите валюту:
          <select name="currency" value={formData.currency} onChange={handleChange}>
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="USDT">Tether</option>
          </select>
        </label>
        <button
          type="button"
          disabled={!isFormComplete}
          onClick={handleSubmit}
          className={`submit-button ${isFormComplete ? 'active' : ''}`}
        >
          Заказать выплату
        </button>
      </form>
    </div>
  );
}

export default BuyCrypto;