package com.example.demo.service;

import java.util.List;

import com.example.demo.model.PageInfo;
import com.example.demo.model.PhotosModel;

public interface PhotosService {

	PhotosModel findPhotosById(PhotosModel photo);

	PhotosModel insertPhotos(PhotosModel photo);	

	PhotosModel deletePhotos(PhotosModel photo);

	List<PhotosModel> findPhotos(PageInfo page);
}
