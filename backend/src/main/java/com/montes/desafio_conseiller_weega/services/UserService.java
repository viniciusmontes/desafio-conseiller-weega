package com.montes.desafio_conseiller_weega.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.montes.desafio_conseiller_weega.dto.UserDTO;
import com.montes.desafio_conseiller_weega.entities.User;
import com.montes.desafio_conseiller_weega.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public UserDTO login(UserDTO dto) {
        User user = userRepository.findByUsername(dto.getUsername())
                .orElseThrow(() -> new RuntimeException("Usuário não existe"));

        if (!passwordEncoder.matches(dto.getPassword(), user.getPassword())) {
            throw new RuntimeException("Senha inválida");
        }

        return new UserDTO(user);
    }

    @Transactional
    public UserDTO insert(UserDTO dto) {
        User entity = new User();
        copyEntityToDto(entity, dto);
        entity = userRepository.save(entity);
        return new UserDTO(entity);
    }

    public void copyEntityToDto(User entity, UserDTO dto) {
        entity.setUsername(dto.getUsername());
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        entity.setGenre(dto.getGenre());
    }
}
