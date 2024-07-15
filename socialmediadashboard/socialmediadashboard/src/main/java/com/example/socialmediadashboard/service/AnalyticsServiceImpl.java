package com.example.socialmediadashboard.service;

import com.example.socialmediadashboard.modal.Analytics;
import com.example.socialmediadashboard.repository.AnalyticsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AnalyticsServiceImpl implements AnalyticsService{
    @Autowired
   private AnalyticsRepository analyticsRepository;
    @Override
    public Analytics getAnalyticsData(Long analyticsId) {
        return analyticsRepository.findById(analyticsId).orElse(null);
    }

    @Override
    public Analytics saveAnalytics(Analytics analytics) {
        return analyticsRepository.save(analytics);
    }
}
