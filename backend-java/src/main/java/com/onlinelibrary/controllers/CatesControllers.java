package com.onlinelibrary.controllers;

import java.util.List;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Cates;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.onlinelibrary.service.CatesService;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/admin/cates")
public class CatesControllers {

	@Autowired
	private CatesService catesService;

//	GET ALL AND DETAILS CATES
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<Cates> getCatesList(){
		return catesService.findAll();
	}

	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ResponseEntity<?> getCates(@PathVariable("id") Long id){
		Cates cates = catesService.findOne(id);
		return new ResponseEntity<Cates>(cates, HttpStatus.OK);
	}

//	CREATE A NEW ONE CATE
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	public Cates addCates(@RequestBody Cates cates){
		return catesService.save(cates);
	}

//	UPDATE A NEW CATE
	@RequestMapping(value = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateCates(@RequestBody Cates cates,@PathVariable("id") Long id){
		Cates current = catesService.findOne(id);
		if(current == null){
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
		cates.setId(id);
		Cates newCates = catesService.save(cates);
		return new ResponseEntity<Cates>(newCates, HttpStatus.OK);
	}

//	DELETE CATES
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteCates(@PathVariable("id") Long id){
		catesService.removeOne(id);
		return new ResponseEntity<String>("Cates id: "+ id + " was deleted", HttpStatus.OK);
	}

	@RequestMapping(value = "/list/{id}", method = RequestMethod.GET)
	public List<Book> getBookListByCategory(@PathVariable("id") Long id){
		Cates cates = catesService.findOne(id);
		List<Book> bookList= cates.getBookList();
		return bookList;
	}
}
