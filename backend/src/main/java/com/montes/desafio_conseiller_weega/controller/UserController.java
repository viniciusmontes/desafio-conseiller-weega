package com.montes.desafio_conseiller_weega.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.montes.desafio_conseiller_weega.entities.User;
import com.montes.desafio_conseiller_weega.services.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            userService.login(user);
            return ResponseEntity.ok("Login bem-sucedido");
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
