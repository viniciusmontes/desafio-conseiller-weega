package com.montes.desafio_conseiller_weega.dto;

import com.montes.desafio_conseiller_weega.entities.Genre;
import com.montes.desafio_conseiller_weega.entities.User;

public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private Genre genre;

    public UserDTO() {
    }

    public UserDTO(Long id, String username, String password, Genre genre) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.genre = genre;
    }

    public UserDTO(User entity) {
        id = entity.getId();
        username = entity.getUsername();
        password = entity.getPassword();
        genre = entity.getGenre();
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public Genre getGenre() {
        return genre;
    }

    public String getPassword() {
        return password;
    }
}
