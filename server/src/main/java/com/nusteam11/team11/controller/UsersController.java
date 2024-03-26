package com.nusteam11.team11.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nusteam11.team11.model.Users;
import com.nusteam11.team11.service.UsersService;

@RestController
@RequestMapping("/user")
public class UsersController {
    @Autowired
    private UsersService userService;

    @GetMapping("/getUser")
    public List<Users> getUserByEmailAndPassword(Users user, @RequestParam String email,
            @RequestParam String password) {
        List<Users> filteredUsers = userService.getUserByEmailAndPassword(user, email, password).stream()
                .filter(foundUser -> foundUser.getEmail().equals(email) && foundUser.getPassword().equals(password))
                .collect(Collectors.toList());
        return filteredUsers;
    }

    @PostMapping("/createUser")
    public ResponseEntity<String> add(@RequestBody Users user) {
        if (!user.getEmail().isEmpty() && !user.getFull_name().isEmpty() && !user.getPassword().isEmpty()) {
            userService.saveUsers(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("New user is added.");
        } else if (user.getEmail().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Email is empty.");
        } else if (user.getFull_name().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Full Name is empty.");
        } else if (user.getPassword().isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Password is empty.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("All fields are empty.");
        }
    }
}
