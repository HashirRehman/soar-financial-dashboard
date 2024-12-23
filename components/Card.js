import '../styles/card.css';

const Card = ({ balance, cardHolder, expiry, lastFour, theme }) => (
  <div className={`card ${theme === 'dark' ? 'dark-card' : 'light-card'}`}>
    <div className="card-balance">Balance: ${balance}</div>
    <div className="card-details">
      <p>CARD HOLDER: {cardHolder}</p>
      <p>VALID THRU: {expiry}</p>
    </div>
    <div className="card-number">**** **** **** {lastFour}</div>
  </div>
);

export default Card;
