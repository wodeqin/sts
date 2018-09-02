package com.example.demo.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.PageInfo;
import com.example.demo.model.PhotosModel;
import com.example.demo.service.PhotosService;

@Controller
@RequestMapping("/top")
public class HelloController {
	
	private final static Logger logger = LoggerFactory.getLogger(HelloController.class);
	
	@Autowired
	PhotosService photosService;
	@Value("${page.number}")
	private int pageNumber;
	
	@RequestMapping("/{id}")
	public String top(Model model, @PathVariable("id") String id) {
		logger.debug("in...top method...");
		PhotosModel photosModel = new PhotosModel();
		photosModel.setId("1");
		photosModel = photosService.findPhotosById(photosModel);
		
		model.addAttribute(photosModel);
		logger.info("out...top method...");
		return "detail";
	}
	
	@RequestMapping("/all")
	public String topList(Model model) {	
		PageInfo page = new PageInfo();
		page.setPageNumber(pageNumber);
		page.setCurrentPage(1);

		List<PhotosModel> photosModelList = photosService.findPhotos(page);
			
		model.addAttribute(photosModelList);
		
		return "index";
	}
}
