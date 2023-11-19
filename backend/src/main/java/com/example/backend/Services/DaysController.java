package com.example.backend.Services;

import com.example.backend.model.Days;
import com.example.backend.repositories.DaysRepository;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/days")
public class DaysController
{

    private final DaysRepository daysRepository;

    @Autowired
    public DaysController(DaysRepository daysRepository) {
        this.daysRepository = daysRepository;
    }

    @GetMapping("/{user_id}")
    public ResponseEntity<List<Days>>  getDayByUser(@PathVariable  int user_id, @RequestParam Date datum) {
        return ResponseEntity.ok(daysRepository.getDaysByUser_id(user_id, datum));
    }
}
