import React from 'react';
import UserDetail from '../components/UserDetail';
import Analytics from '../components/Analytics';

const UserProfile = ({ match }) => {
  const userId = match.params.id;

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">User Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <UserDetail userId={userId} />
          </div>
          <div>
            <Analytics analyticsId={userId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
