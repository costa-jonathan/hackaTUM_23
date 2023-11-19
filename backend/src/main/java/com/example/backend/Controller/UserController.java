package com.example.backend.Controller;

import com.example.backend.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.backend.repositories.UserRepository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@RequestMapping("/api/users")
@RestController
@CrossOrigin
public class UserController {

    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    @PostMapping("/users")
    public ResponseEntity<Object> createUser(@RequestBody Users newUser) {
        // Input validation
        if (newUser == null || newUser.getUsername() == null || newUser.getPassword() == null) {
            return ResponseEntity.badRequest().body("Invalid input data");
        }

        // Check if the username already exists
        if (userRepository.findByUsername(newUser.getUsername()).size() != 0) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }

        // Save the new user
        userRepository.save(newUser);

        // Return the user in the response body
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    @PostMapping("/passwords")
    public ResponseEntity<String> isPasswordCorrect(@RequestParam String username, @RequestParam String password){
        if (Objects.equals(userRepository.getPasswordByUsername(username), password)){

            return ResponseEntity.ok("Alles korrekt");
        }
        return ResponseEntity.badRequest().body("Passwort ist falsch");
    }


    @GetMapping("/getUsers")
    public ResponseEntity<List<Users>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PutMapping("/{user_id}/username")
    public ResponseEntity<Object> updateUsername(@PathVariable Long user_id, @RequestParam String newUsername) {
        Optional<Users> optionalUser = userRepository.findById(user_id);

        if (optionalUser.isPresent()) {
            Users user = optionalUser.get();

            // Check if the new username already exists
            if (userRepository.findByUsername(newUsername).isEmpty()) {
                // Username does not exist, proceed with the update
                user.setUsername(newUsername);
                userRepository.save(user);
                return ResponseEntity.ok().build();
            } else {
                // Username already exists, return a bad request response
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This username already exists");
            }
        } else {
            // User not found, return a not found response
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @GetMapping("/existsUsername")
    public ResponseEntity<String> existsUsername(@RequestParam String username) {
        if (userRepository.existsUsername(username) == null){
            return ResponseEntity.badRequest().body("Username existiert nicht");
        }
        return ResponseEntity.ok("Username existiert");
    }
    @GetMapping("/password")
    public ResponseEntity<String> getPasswordbyUsername(@RequestParam String username, @RequestParam String password) {
        if (Objects.equals(userRepository.getPasswordByUsername(username), password)){

            return ResponseEntity.ok("Alles korrekt");
        }
        return ResponseEntity.badRequest().body("Passwort ist falsch");
    }

    @GetMapping("/firstname")
    public String getFirstname(@RequestParam String username) {
        return userRepository.getFirstNameByUsername(username);
    }

}




