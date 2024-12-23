import { Pie } from 'react-chartjs-2';
import '../styles/expenseStatistics.css';

const ExpenseStatistics = () => {
  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ['#f39c12', '#e74c3c', '#9b59b6', '#34495e'],
      },
    ],
  };

  return <div className="expense-statistics"><Pie data={data} /></div>;
};

export default ExpenseStatistics;
