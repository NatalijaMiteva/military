package com.finki.military.service;

import com.finki.military.domain.User;
import com.finki.military.repository.UserRpository;
import javassist.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRpository repository;

    public UserService(UserRpository userRepository) {
        this.repository = userRepository;
    }

    public List<User> findAll() {
        return repository.findAll();
    }

    public User save(User user) {
        return repository.save(user);
    }

    public User findOne(Long id) throws NotFoundException {
        return repository.findOneById(id).orElseThrow(() -> new NotFoundException("User not found"));
    }
}
