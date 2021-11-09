import { Link } from 'react-router-dom';

interface DealerDashboardProps {}

export const DealerDashboard: React.FC<DealerDashboardProps> = () => {
  return (
    <h1>
      Dealer dashboard
      <Link to="/admin/dashboard">admin</Link>
    </h1>
  );
};

export default DealerDashboard;
