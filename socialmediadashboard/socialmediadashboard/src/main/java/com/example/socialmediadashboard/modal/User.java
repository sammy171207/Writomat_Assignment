package com.example.socialmediadashboard.modal;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String category;
    private String bio;
    private String contact;
    private String links;

    @OneToOne(mappedBy = "user")
    private Analytics analytics;
}
