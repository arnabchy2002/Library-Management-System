package com.xfactor.openlibrary.controllers;
import java.util.HashMap;
import java.lang.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class Hello {

    @GetMapping("/hello")
    public String hello(@RequestParam String name,int nu,double marks) {

        return "Hello "+name +" and roll number = "+nu+" and marks ="+marks;

    }
    @GetMapping("/Hi/{name}/{nu}")
    public String ab(@PathVariable String name,@PathVariable int nu) {

        return "Hi "+name+" and roll number = "+nu;

    }
    @GetMapping("/Ho/{name}/{nu}")
    public String bc(@PathVariable String name,@RequestParam int nu) 
    {

        return "Hola "+name+" and roll number = "+nu;

    }
    @GetMapping("/Damn/{nam}/{age}")
    public HashMap<String,Object>cd(@PathVariable String nam,@PathVariable Object age)
    {
        HashMap<String,Object> respHashmap=new HashMap<>();
        respHashmap.put("nam",nam);
        respHashmap.put("age",age);
        return respHashmap;
    }

}
