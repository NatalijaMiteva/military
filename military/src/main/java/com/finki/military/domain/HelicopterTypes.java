package com.finki.military.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "helicopter_types")
public class HelicopterTypes extends BaseEntity {
    public String getName() {
        return name;
    }

    @Column(name = "name")
    private String name;
}
