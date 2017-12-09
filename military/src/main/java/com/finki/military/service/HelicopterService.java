package com.finki.military.service;

import com.finki.military.repository.HelicopterRepository;
import com.finki.military.repository.HelicopterTypeRepository;
import org.springframework.stereotype.Service;

@Service
public class HelicopterService {
    private final HelicopterRepository repository;
    private final HelicopterTypeRepository helicopterTypeRepository;

    public HelicopterService(HelicopterRepository repository, HelicopterTypeRepository helicopterTypeRepository) {
        this.repository = repository;
        this.helicopterTypeRepository = helicopterTypeRepository;
    }
}
