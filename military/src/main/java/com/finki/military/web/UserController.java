package com.finki.military.web;

import com.finki.military.domain.User;
import com.finki.military.service.UserService;
import javassist.NotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService userService) {
        this.service = userService;
    }

    @GetMapping
    public List<User> findAll(){
        return service.findAll();
    }

    @PostMapping
    public User save(@RequestBody User user){
        return service.save(user);
    }

    @GetMapping("/{id}")
    public User findOne(@PathVariable Long id) throws NotFoundException {
        return service.findOne(id);
    }

}
