package com.finki.military.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "login_details")
public class LoginDetails extends BaseEntity {

    @Column(name = "username", nullable = false)
    private String username;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    @Column(name="ativation_key")
    private String activationKey;

    public String getUsername() {
        return username;
    }
}
