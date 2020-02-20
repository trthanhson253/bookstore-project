package com.onlinelibrary.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.onlinelibrary.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinelibrary.dao.CatesRepository;
import com.onlinelibrary.entity.Cates;
import com.onlinelibrary.service.CatesService;

@Service
public class CatesServiceImpl implements CatesService {

	@Autowired
	private CatesRepository catesRepository;

	@Override
	public List<Cates> findAll() {
		List<Cates> cates = (List<Cates>) catesRepository.findAll();
		return cates;
	}

	@Override
	public Cates save(Cates cates) {
		return catesRepository.save(cates);
	}

	@Override
	public void removeOne(Long id) {
		catesRepository.deleteById(id);
	}

	@Override
	public Cates findOne(Long id) {
		return catesRepository.findById(id).get();
	}

	@Override
	public void updateBookCategory(Book book, Cates cates) {
		book.setCates(cates);
		cates.getBookList().add(book);
		save(cates);
	}


}
