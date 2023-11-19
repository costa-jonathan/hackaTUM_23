package com.example.backend.repositories;

import com.example.backend.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository <Users,Long> {

    @Query("SELECT max(user_id) FROM Users")
    int getMaxId();

    @Query(value = "SELECT u.user_id FROM Users u WHERE u.username = :other")
    List<Integer> findByUsername(String other);

    @Query(value = "SELECT u.password FROM Users u WHERE u.username = :username")
    String getPasswordByUsername(String username);

    @Query(value = "Select u FROM Users u WHERE u.username = :username")
    Users existsUsername(String username);

    @Query(value = "SELECT u.firstname FROM Users  u WHERE u.username = :username")
    String getFirstNameByUsername(String username);
}
