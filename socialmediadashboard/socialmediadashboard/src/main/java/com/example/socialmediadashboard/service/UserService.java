package com.example.socialmediadashboard.service;

import com.example.socialmediadashboard.modal.User;

public interface UserService {
    User getUserData(Long userId);
    User saveUser(User user);
}
