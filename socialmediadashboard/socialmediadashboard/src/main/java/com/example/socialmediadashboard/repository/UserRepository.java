package com.example.socialmediadashboard.repository;

import com.example.socialmediadashboard.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
