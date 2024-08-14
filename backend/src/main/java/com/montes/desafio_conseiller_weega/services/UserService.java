package com.montes.desafio_conseiller_weega.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.montes.desafio_conseiller_weega.entities.User;
import com.montes.desafio_conseiller_weega.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void login(User entity) {
        User user = userRepository.findByUsername(entity.getUsername())
                .orElseThrow(() -> new RuntimeException("Usuário não existe"));

        if (!passwordEncoder.matches(entity.getPassword(), user.getPassword())) {
            throw new RuntimeException("Senha inválida");
        }

    }
}
