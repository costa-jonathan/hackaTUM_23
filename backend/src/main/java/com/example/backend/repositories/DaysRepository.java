package com.example.backend.repositories;

import com.example.backend.model.Days;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface DaysRepository extends JpaRepository<Days,Long> {
    @Query(value = "SELECT * FROM Days d WHERE d.user_id = :userId AND d.datum = :date", nativeQuery = true)
    List<Days> getDaysByUser_id(int userId, Date date);
}
