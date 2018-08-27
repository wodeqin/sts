package com.example.demo.model;

public class PageInfo { 
	private int currentPage = 1; 
	private int from ;
	private int to ;
	private int pageNumber = 1 ;
	 
 public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
		this.from = (currentPage-1) * pageNumber;
		this.to = currentPage * pageNumber;
	}

	public int getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}
	
	public int getFrom() {
		return from;
	}
	
	public int getTo() {
		return to;
	}


}
