import React, { useEffect, useState } from 'react';
import { getUserData } from '../services/api';

const UserDetail = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userId);
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    fetchData();
  }, [userId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!user) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h1 className="text-xl font-bold mb-2">{user.name || 'Name not available'}</h1>
      <p className="mb-2"><strong>Category:</strong> {user.category || 'Category not available'}</p>
      <p className="mb-2"><strong>Bio:</strong> {user.bio || 'Bio not available'}</p>
      <p className="mb-2"><strong>Contact:</strong> {user.contact || 'Contact not available'}</p>
      <p><strong>Links:</strong> <a href={user.links} className="text-primary underline">{user.links || 'Links not available'}</a></p>
    </div>
  );
};

export default UserDetail;
