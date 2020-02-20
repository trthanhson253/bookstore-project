package com.onlinelibrary.service;

import java.util.List;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Cates;

public interface CatesService {
	List<Cates> findAll();

	Cates save(Cates cates);

	void removeOne(Long id);

	Cates findOne(Long id);

	void updateBookCategory(Book book, Cates cates);
}
