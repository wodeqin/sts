package com.example.demo.model;

import java.io.Serializable;

public class PhotosModel implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     * ID
     */
    private String id;

    /**
     * path
     */
    private String pathFileName;

    /**
     * title
     */
    private String title;

    /**
     * flg 1: normal 2:near pic 3: special
     */
    private String flg;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPathFileName() {
		return pathFileName;
	}

	public void setPathFileName(String pathFileName) {
		this.pathFileName = pathFileName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFlg() {
		return flg;
	}

	public void setFlg(String flg) {
		this.flg = flg;
	}


}
