package com.finki.military.service;

import com.finki.military.domain.Test;
import com.finki.military.repository.FirstRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FirstService {

    private final FirstRepository repository;

    public FirstService(
            FirstRepository repository
    ) {
        this.repository = repository;
    }

    public void test(){
        List<Test> list = repository.findAll();
        System.out.print(list);
    }
}
