import '../styles/index.css'
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Chart from '../components/Chart';
import RecentTransactions from '../components/RecentTransactions';
import ExpenseStatistics from '../components/ExpenseStatistics';
import QuickTransfer from '../components/QuickTransfer';
import Header from '../components/Header';

const HomePage = () => {
  const transactions = [
    { description: 'Deposit from Card', amount: -850 },
    { description: 'Deposit Paypal', amount: 2500 },
    { description: 'Jemi Wilson', amount: 5400 },
  ];

  return (
    <div className="dashboard">
      <Header tabName="Dashboard" />
      <div className="layout-container">
        <Sidebar />
        <div className="middle-column">
          <div className="cards">
            <Card balance="5756" cardHolder="Eddy Cusuma" expiry="12/22" lastFour="1234" theme="dark" />
            <Card balance="3021" cardHolder="Sarah Brown" expiry="11/24" lastFour="5678" theme="light" />
          </div>
          <div className="graph-container">
            <Chart />
          </div>
        </div>
        <div className="right-column">
          <RecentTransactions transactions={transactions} />
          <ExpenseStatistics />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
