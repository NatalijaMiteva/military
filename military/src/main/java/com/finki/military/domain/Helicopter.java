package com.finki.military.domain;

import javax.persistence.*;

@Entity
@Table(name = "helicopters")
public class Helicopter extends BaseEntity {
    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private HelicopterTypes helicopterTypes;

    public String getName() {
        return name;
    }

    public HelicopterTypes getHelicopterTypes() {
        return helicopterTypes;
    }
}
