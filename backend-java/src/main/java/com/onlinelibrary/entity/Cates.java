package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="cates")
public class Cates extends BaseEntity {
	
	@Column(name="name")
	@NotBlank(message = "Category name is required")
	private String name;

	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true,mappedBy = "cates")
	@JsonIgnore
	private List<Book> bookList = new ArrayList<>();

	public Cates() {
	}

	public List<Book> getBookList() {
		return bookList;
	}

	public void setBookList(List<Book> bookList) {
		this.bookList = bookList;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
