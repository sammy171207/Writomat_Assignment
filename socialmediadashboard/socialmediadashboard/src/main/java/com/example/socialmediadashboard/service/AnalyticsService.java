package com.example.socialmediadashboard.service;

import com.example.socialmediadashboard.modal.Analytics;

public interface AnalyticsService {
    Analytics getAnalyticsData(Long analyticsId);
    Analytics saveAnalytics(Analytics analytics);
}
