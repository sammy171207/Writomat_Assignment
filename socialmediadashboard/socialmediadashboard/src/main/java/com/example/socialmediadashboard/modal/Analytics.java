package com.example.socialmediadashboard.modal;

import jakarta.persistence.*;
import lombok.Data;

    @Entity
    @Data
    public class Analytics {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private int followers;
        private int following;
        private int posts;
        private int accountReached;
        private int accountEngaged;
        private int contentShared;
        private int adsRun;
        private int activePromotions;
        private int totalStories;
        private int totalFollows;
        private int totalSaves;
        private int totalComments;
        private int totalShares;


        @OneToOne
        private User user;
    }


