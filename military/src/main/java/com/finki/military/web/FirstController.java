package com.finki.military.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.finki.military.service.FirstService;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class FirstController {

    private final FirstService firstService;

    public FirstController(FirstService firstService) {
        this.firstService = firstService;
    }

    @GetMapping()
    public void test() {
        System.out.print("I made it!");
    }

    @GetMapping(value = "/delete")
    public void delete() {
        firstService.test();
    }


}

