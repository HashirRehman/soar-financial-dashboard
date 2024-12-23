import '../styles/recentTransactions.css';

const RecentTransactions = ({ transactions }) => (
  <div className="transactions">
    <h3>Recent Transactions</h3>
    <ul>
      {transactions.map((tx, index) => (
        <li key={index}>
          <div className="description">
            {tx.icon && <span className="icon">{tx.icon}</span>}
            {tx.description}
          </div>
          <div
            className={`amount ${tx.amount > 0 ? 'positive' : 'negative'}`}
          >
            ${Math.abs(tx.amount).toLocaleString()}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentTransactions;
