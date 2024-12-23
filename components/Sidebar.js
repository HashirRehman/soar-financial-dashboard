import { useState } from 'react';
import '../styles/sidebar.css';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: '/icons/dashboard.svg', label: 'Dashboard' },
    { icon: '/icons/transactions.svg', label: 'Transactions' },
    { icon: '/icons/accounts.svg', label: 'Accounts' },
    { icon: '/icons/investments.svg', label: 'Investments' },
    { icon: '/icons/credit-cards.svg', label: 'Credit Cards' },
    { icon: '/icons/loans.svg', label: 'Loans' },
    { icon: '/icons/services.svg', label: 'Services' },
    { icon: '/icons/my-privileges.svg', label: 'My Privileges' },
    { icon: '/icons/settings.svg', label: 'Setting' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img src="icons/soar-task-logo.svg" alt="Soar Task Icon" className="sidebar-icon" />
        <h2 className="sidebar-title">Soar Task</h2>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            className={`sidebar-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.icon} alt={item.label} className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
