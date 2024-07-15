package com.example.socialmediadashboard.config;

import com.example.socialmediadashboard.modal.Analytics;
import com.example.socialmediadashboard.modal.User;
import com.example.socialmediadashboard.repository.AnalyticsRepository;
import com.example.socialmediadashboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner   {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AnalyticsRepository analyticsRepository;

    @Override
    public void run(String... args) throws Exception {
        User user = new User();
        user.setName("John Doe");
        user.setCategory("Influencer");
        user.setBio("Bio goes here...");
        user.setContact("contact@example.com");
        user.setLinks("http://example.com");
        userRepository.save(user);

        Analytics analytics = new Analytics();
        analytics.setFollowers(5000);
        analytics.setFollowing(150);
        analytics.setPosts(100);
        analytics.setAccountReached(4500);
        analytics.setAccountEngaged(1200);
        analytics.setContentShared(50);
        analytics.setAdsRun(5);
        analytics.setActivePromotions(3);
        analytics.setTotalStories(80);
        analytics.setTotalFollows(500);
        analytics.setTotalSaves(300);
        analytics.setTotalComments(200);
        analytics.setTotalShares(150);
        analytics.setUser(user);
        analyticsRepository.save(analytics);
    }

}
