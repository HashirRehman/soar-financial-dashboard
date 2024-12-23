import '../styles/quickTransfer.css';

const QuickTransfer = () => (
  <div className="quick-transfer">
    <h3>Quick Transfer</h3>
    <div className="transfer">
      <input type="number" placeholder="Amount" />
      <button>Send</button>
    </div>
  </div>
);

export default QuickTransfer;
