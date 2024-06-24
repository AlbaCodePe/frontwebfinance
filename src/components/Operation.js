import React, { useState } from 'react';
import './Operation.css';
import walletIcon from './images/logo.png'; 
import profileIcon from './images/profile.png'; 

const Operation = () => {
  const [currency, setCurrency] = useState('soles');
  const [creditValue, setCreditValue] = useState('');
  const [installments, setInstallments] = useState('');
  const [initialQuota, setInitialQuota] = useState('');
  const [rateType, setRateType] = useState('efectiva');
  const [capitalization, setCapitalization] = useState('');
  const [rateTime, setRateTime] = useState('');
  const [rateValue, setRateValue] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [gracePeriod, setGracePeriod] = useState('');
  const [gracePeriodsCount, setGracePeriodsCount] = useState('');

  const handleCalculate = () => {};

  return (
    <div className="operation-container">
      <header className="operation-header">
        <div className="logo">
          <img src={walletIcon} alt="FlowFinance Logo" />
        </div>
        <nav>
          <a href="/main">Inicio</a>
          <a href="/operations">Realizar Operación</a>
          <a href="/history">Historial</a>
        </nav>
        <div className="user-icon">
          <img src={profileIcon} alt="User Profile" />
        </div>
      </header>
      <main className="operation-main">
        <div className="operation-content">
          <div className="form-column">
            <div className="form-group">
              <label>1. Seleccionar moneda:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="soles"
                    checked={currency === 'soles'}
                    onChange={() => setCurrency('soles')}
                  />
                  Soles
                </label>
                <label>
                  <input
                    type="radio"
                    value="dolares"
                    checked={currency === 'dolares'}
                    onChange={() => setCurrency('dolares')}
                  />
                  Dólares
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>2. Valor del crédito:</label>
              <input
                type="text"
                value={creditValue}
                onChange={(e) => setCreditValue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>3. Número de cuotas:</label>
              <input
                type="text"
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>4. Porcentaje de cuota inicial:</label>
              <input
                type="text"
                value={initialQuota}
                onChange={(e) => setInitialQuota(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>5. Seleccionar tipo de tasa:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    value="efectiva"
                    checked={rateType === 'efectiva'}
                    onChange={() => setRateType('efectiva')}
                  />
                  Efectiva
                </label>
                <label>
                  <input
                    type="radio"
                    value="nominal"
                    checked={rateType === 'nominal'}
                    onChange={() => setRateType('nominal')}
                  />
                  Nominal
                </label>
              </div>
            </div>
            <div className="form-group">
              <label>6. Seleccionar capitalización:</label>
              <input
                type="text"
                value={capitalization}
                onChange={(e) => setCapitalization(e.target.value)}
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label>7. Seleccionar tiempo de la tasa:</label>
              <input
                type="text"
                value={rateTime}
                onChange={(e) => setRateTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>8. Ingresa el valor de la tasa:</label>
              <input
                type="text"
                value={rateValue}
                onChange={(e) => setRateValue(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>9. Selecciona frecuencia de pago:</label>
              <input
                type="text"
                value={paymentFrequency}
                onChange={(e) => setPaymentFrequency(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>10. Seleccionar plazo de gracia:</label>
              <input
                type="text"
                value={gracePeriod}
                onChange={(e) => setGracePeriod(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>11. Número de períodos de gracia:</label>
              <input
                type="text"
                value={gracePeriodsCount}
                onChange={(e) => setGracePeriodsCount(e.target.value)}
              />
            </div>
            <button onClick={handleCalculate}>Calcular</button>
          </div>
          <div className="operation-details">
            <p>Aquí se mostrarán los detalles de la operación</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Smart Wallet. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Operation;
