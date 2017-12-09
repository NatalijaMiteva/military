package com.finki.military.web;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Miteva on 16-Sep-17.
 */
@RestController
@RequestMapping(value = "/api/test", produces = MediaType.APPLICATION_JSON_VALUE)
public class TestController {

    @GetMapping()
    public void test(){
        System.out.print("I made it!");
    }

    @GetMapping(value="/a")
    public void test1(){
        System.out.print("I made it1!");
    }
}
