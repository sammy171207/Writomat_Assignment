import React from 'react';
import Analytics from '../components/Analytics';
import UserDetail from '../components/UserDetail';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Dashboard</h1>
      <UserDetail userId={1} />
      <Analytics analyticsId={1} />
    </div>
  );
};

export default Dashboard;
