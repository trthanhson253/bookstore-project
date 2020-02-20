package com.onlinelibrary.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Cates;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.service.BooksService;
import com.onlinelibrary.service.CatesService;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/admin/books")
public class BooksControllers {
    @Autowired
    private BooksService booksService;

    @Autowired
    private CatesService catesService;

    @GetMapping("/all")
    public List<Book> getBooksList(){

        return booksService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBook(@PathVariable("id") Long id){
        Book book = booksService.findOne(id);
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    @PostMapping("/add/{cateId}")
    public ResponseEntity<?> addBook(@RequestBody Book book, @PathVariable("cateId") Long cateId){

//        ObjectMapper om = new ObjectMapper();
//        Book book = om.convertValue(mapper.get("book"), Book.class);
//        Integer cateId = (Integer) mapper.get("cateId");

        Cates catesItem = catesService.findOne(cateId);

        catesService.updateBookCategory(book,catesItem);
//        booksService.save(book);
        return new ResponseEntity("Success", HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateBooks(@RequestBody Book book, @PathVariable("id") Long id){
        Book current = booksService.findOne(id);
        if(current == null){
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        book.setId(id);
        Book newBook = booksService.save(book);
        return new ResponseEntity<Book>(newBook,HttpStatus.OK);
    }

    @PostMapping("/delete")
    public ResponseEntity deleteBooks(@RequestBody String id){
        booksService.removeOne(Long.valueOf(id));
        return new ResponseEntity<>("Book ID "+id+" was deleted",HttpStatus.OK);
    }

    @PostMapping("/searchBook")
    public ResponseEntity searchBook(
            @RequestBody HashMap<String, String> mapper
    ){
        String keyword = mapper.get("keyword");
        String searchOption = mapper.get("searchOption");
        List<Book> bookList = new ArrayList<>();
        if(searchOption.equals("Search All")){
            bookList = booksService.findAllBook(keyword);
        }
        if(searchOption.equals("Search by Title")){
            bookList = booksService.findByTitleContaining(keyword);
        }
        if(searchOption.equals("Search by Author")){
            bookList = booksService.findByAuthorContaining(keyword);
        }
        if(searchOption.equals("Search by Publisher")){
           bookList = booksService.findByPublisherContaining(keyword);
        }
        if(searchOption.equals("Search by ISBN")){
            bookList = booksService.findByISBNContaining(keyword);
        }
        return new ResponseEntity(bookList, HttpStatus.OK);
    }

    @PostMapping("/sortBy")
    public ResponseEntity sortBy(
            @RequestBody String keyword
    ){
        List<Book> bookList = new ArrayList<>();
        if(keyword.equals("pricelowtohigh")){
            bookList = booksService.findBookListPriceLowToHigh();
        }
        if(keyword.equals("pricehightolow")){
            bookList = booksService.findBookListPriceHighToLow();
        }

        return new ResponseEntity(bookList, HttpStatus.OK);
    }

    @RequestMapping(value="/add/image", method=RequestMethod.POST)
    public ResponseEntity upload(
            @RequestParam("id") Long id,
            HttpServletResponse response, HttpServletRequest request
    ){
        try {
            Book book = booksService.findOne(id);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = id+".png";


            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/"+fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value="/update/image", method=RequestMethod.POST)
    public ResponseEntity updateImagePost(
            @RequestParam("id") Long id,
            HttpServletResponse response, HttpServletRequest request
    ){
        try {
            Book book = booksService.findOne(id);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = id+".png";

            if(multipartFile.isEmpty()==true){
                Files.delete(Paths.get("src/main/resources/static/image/book/"+fileName));
            }
            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/"+fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload failed!", HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/relatedBooks/{id}")
    public ResponseEntity<?> getRelatedBooks(@PathVariable("id") Long bookId){

        List<Book> bookList = new ArrayList<>();
        Long catesId = booksService.findCatesIdFromBooksId(bookId);
        bookList = booksService.findRelatedBooks(bookId,catesId);
        return new ResponseEntity(bookList, HttpStatus.OK);
    }




}
