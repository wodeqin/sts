package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.mapper.PhotosMapper;
import com.example.demo.model.PageInfo;
import com.example.demo.model.PhotosModel;

@Service
@Transactional
public class PhotosServiceImpl implements PhotosService{

		@Autowired
		PhotosMapper photosMapper;


		@Override
		public PhotosModel findPhotosById(PhotosModel photo){	

			PhotosModel resltObj = photosMapper.findPhotosById(photo);
			
			return resltObj == null ? new PhotosModel(): resltObj;
		}


		@Override
		public PhotosModel insertPhotos(PhotosModel photo){

			int count = photosMapper.insertPhotos(photo);
			// Insertの件数＜１件の場合、エラーにする
	    	if (1 > count) {
	   		 
	    	}
	    	return photo;


		}

		@Override
		public PhotosModel deletePhotos(PhotosModel photo){
			int count = photosMapper.deletePhotos(photo);
			
	    	if (1 > count) {	   		 
	    	}
	    	return photo;
		}


		@Override
		public List<PhotosModel> findPhotos(PageInfo page){ 
			List<PhotosModel> ret = photosMapper.findPhotos(page);
			if(ret==null) {
				ret = new ArrayList<PhotosModel>();
			}
			
			return ret;

		}
}
