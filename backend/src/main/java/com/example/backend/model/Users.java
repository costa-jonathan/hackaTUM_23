package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "passwort", nullable = false)
    private String password;

    @Column(name = "age", nullable = false)
    private int age;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;;

    @Column(name = "pets")
    private boolean pets;

    @Column(name = "medicine")
    private boolean medicine;

    public Users(int user_id, String username, String password, String email, int age, String firstname, String lastname, boolean pets, boolean medicine) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
        this.firstname = firstname;
        this.lastname = lastname;
        this.pets = pets;
        this.medicine = medicine;
    }

    public Users(){}
}
