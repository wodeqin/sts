package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BusinessController {
	@Value("${hello}")
	private String hello;
	
	@RequestMapping("/api/table")
	public Map getColume() {
		Map row1 = new HashMap<String, String>();
		row1.put("id", "1");
		row1.put("name", "jack");
		
		Map row2 = new HashMap<String, String>();
		row2.put("id", "2");
		row2.put("name", hello);
		
		List list = new ArrayList();
		list.add(row1);
		list.add(row2);
		
		Map rows = new HashMap<String, Object>();
		rows.put("rows", list);
		return rows;
	}

}
