package com.example.socialmediadashboard.controller;

import com.example.socialmediadashboard.modal.Analytics;
import com.example.socialmediadashboard.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/{id}")
    public Analytics getAnalytics(@PathVariable Long id) {
        return analyticsService.getAnalyticsData(id);
    }

    @PostMapping
    public Analytics saveAnalytics(@RequestBody Analytics analytics) {
        return analyticsService.saveAnalytics(analytics);
    }
}
