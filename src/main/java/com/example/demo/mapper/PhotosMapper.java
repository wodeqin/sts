package com.example.demo.mapper;

import java.util.List;

import com.example.demo.model.PageInfo;
import com.example.demo.model.PhotosModel;

public interface PhotosMapper {
	
    PhotosModel findPhotosById(PhotosModel photo);
	
    int insertPhotos(PhotosModel photo);
    
    int deletePhotos(PhotosModel photo);
    
    List<PhotosModel> findPhotos(PageInfo page);
}
