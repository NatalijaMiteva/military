package com.finki.military.domain;

import javax.persistence.*;
@Entity
@Table(name = "test")
public class Test extends BaseEntity {

    @Column(name = "name")
    private String name;

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }
}


