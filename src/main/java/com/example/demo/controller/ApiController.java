package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.model.PhotosModel;
import com.example.demo.service.PhotosService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	private final static Logger logger = LoggerFactory.getLogger(ApiController.class);
	
	@Value("${img.storage.dst}")
	private String dstFilePath;
	
	@Autowired
	PhotosService photosService;
	
	@RequestMapping(value="/uploadImg",
			method = {RequestMethod.POST})
    @ResponseBody
	public String getUploadImg(			   
	           @RequestParam ("file") MultipartFile  poster) {
		
		logger.info("processing getUploadImg............");
		 ObjectNode result = new ObjectMapper().createObjectNode();
		if(poster==null) {
			logger.info("no data acceptted............");
			return result.toString();
		}
		
		 //获取文件名
	     String fileName = poster.getOriginalFilename();     
	      
           File picFile = new File(dstFilePath + File.separator + fileName);
           if(!picFile.exists()){              
                try {
                     //存储文件
                     poster.transferTo(picFile);
                     insertPhotos(fileName);
                } catch (IllegalStateException e) {
                     e.printStackTrace();
                } catch (IOException e) {
                     e.printStackTrace();
                }
           }
           //返回添加后的推荐条目id
          result.put("result","OK");      
	      return result.toString();
		
	}
	
	private void insertPhotos(String filename) {
		PhotosModel photo = new PhotosModel();
		photo.setFlg("1");
		photo.setPathFileName("/images/" + filename);
		photo.setTitle(filename);
		
		photosService.insertPhotos(photo);
		
	}

}
