package com.onlinelibrary.service.impl;

import com.onlinelibrary.dao.BooksRepository;
import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Comment;
import com.onlinelibrary.entity.ReplyComment;
import com.onlinelibrary.entity.User;
import com.onlinelibrary.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BooksServiceImpl implements BooksService {

    @Autowired
    private BooksRepository booksRepository;

    @Override
    public List<Book> findAll() {

        return (List<Book>) booksRepository.findAll();
    }

    @Override
    public Book save(Book book) {
        return booksRepository.save(book);
    }

    @Override
    public void removeOne(Long id) {
        booksRepository.deleteById(id);
    }

    @Override
    public Book findOne(Long id) {
        return booksRepository.findById(id).get();
    }

    @Override
    public List<Book> findByTitleContaining(String title) {
        List<Book> bookList = booksRepository.findByTitleContaining(title);
        return bookList;
    }

    @Override
    public List<Book> findByAuthorContaining(String author) {
        List<Book> bookList = booksRepository.findByAuthorContaining(author);
//        booksRepository.findAll
        return bookList;
    }

    @Override
    public List<Book> findByPublisherContaining(String publisher) {
        List<Book> bookList = booksRepository.findByPublisherContaining(publisher);
        return bookList;
    }

    @Override
    public List<Book> findByISBNContaining(String isbn) {
        List<Book> bookList = booksRepository.findByIsbnContaining(isbn);
        return bookList;
    }

    @Override
    public List<Book> findAllBook(String keyword) {
        List<Book> bookList = booksRepository.findAllBook(keyword);
        return bookList;
    }

    @Override
    public List<Book> findRelatedBooks(Long bookId,Long catesId) {
        List<Book> bookList = booksRepository.findRelatedBooks(bookId,catesId);
        return bookList;
    }

    @Override
    public Long findCatesIdFromBooksId(Long bookId) {
        return booksRepository.findCatesIdFromBooksId(bookId);
    }

    @Override
    public void updateComment(Comment comment, Book book, User user) {
        comment.setUser(user);
        comment.setBook(book);
        book.getCommentList().add(comment);
        save(book);
    }

    @Override
    public List<Book> findBookListPriceLowToHigh() {
        return booksRepository.findBookListPriceLowToHigh();
    }

    @Override
    public List<Book> findBookListPriceHighToLow() {
        return booksRepository.findBookListPriceHighToLow();
    }


}
