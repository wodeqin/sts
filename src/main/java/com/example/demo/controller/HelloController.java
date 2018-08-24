package com.example.demo.controller;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HelloController {

	@RequestMapping("/hello/{id}")
	public String hello(@PathVariable("id") String id) {
		return "hello/hello";
	}
	
	@RequestMapping("/top/{id}")
	public String top(@PathVariable("id") String id) {
		return "index";
	}
}
