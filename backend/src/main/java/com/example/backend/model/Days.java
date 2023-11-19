package com.example.backend.model;

import jakarta.persistence.*;

import java.sql.Date;
import java.sql.Time;

@Entity
public class Days {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int time_id;

    private Time time_stemp;

    private int temperatur;

    @Column(name = "userherzfrequenz", nullable = false)
    private int heartfrequence;

    private int user_id;

    private Date datum;

    public Days(int time_id, Time time_stemp, int temperatur, int heartfrequence, int user_id, Date datum) {
        this.time_id = time_id;
        this.time_stemp = time_stemp;
        this.temperatur = temperatur;
        this.heartfrequence = heartfrequence;
        this.user_id = user_id;
        this.datum = datum;
    }

    public Days(){}


}
