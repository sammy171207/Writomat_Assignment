import React, { useEffect, useState } from 'react';
import { getAnalyticsData } from '../services/api';

const Analytics = ({ analyticsId }) => {
  const [analytics, setAnalytics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnalyticsData(analyticsId);
        setAnalytics(data);
      } catch (err) {
        setError('Failed to fetch analytics data');
      }
    };

    fetchData();
  }, [analyticsId]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!analytics) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-gray-600">
          <p><strong>Followers:</strong> {analytics.followers}</p>
          <p><strong>Following:</strong> {analytics.following}</p>
          <p><strong>Posts:</strong> {analytics.posts}</p>
          <p><strong>Account Reached:</strong> {analytics.accountReached}</p>
          <p><strong>Account Engaged:</strong> {analytics.accountEngaged}</p>
        </div>
        <div className="text-gray-600">
          <p><strong>Content Shared:</strong> {analytics.contentShared}</p>
          <p><strong>Ads Run:</strong> {analytics.adsRun}</p>
          <p><strong>Active Promotions:</strong> {analytics.activePromotions}</p>
          <p><strong>Total Stories:</strong> {analytics.totalStories}</p>
          <p><strong>Total Follows:</strong> {analytics.totalFollows}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600"><strong>Total Saves:</strong> {analytics.totalSaves}</p>
        <p className="text-gray-600"><strong>Total Comments:</strong> {analytics.totalComments}</p>
        <p className="text-gray-600"><strong>Total Shares:</strong> {analytics.totalShares}</p>
      </div>
    </div>
  );
};

export default Analytics;
