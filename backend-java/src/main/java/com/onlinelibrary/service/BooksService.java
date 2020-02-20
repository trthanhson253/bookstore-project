package com.onlinelibrary.service;

import com.onlinelibrary.entity.Book;
import com.onlinelibrary.entity.Comment;
import com.onlinelibrary.entity.ReplyComment;
import com.onlinelibrary.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

public interface BooksService {
    List<Book> findAll();
    Book save(Book book);
    void removeOne(Long id);
    Book findOne(Long id);
    List<Book> findByTitleContaining(String title);
    List<Book> findByAuthorContaining(String author);
    List<Book> findByPublisherContaining(String publisher);
    List<Book> findByISBNContaining(String isbn);
    List<Book> findAllBook(String keyword);

    List<Book> findRelatedBooks(Long bookId,Long catesId);
    Long findCatesIdFromBooksId(Long bookId);

    void updateComment(Comment comment, Book book, User user);


    List<Book> findBookListPriceLowToHigh();

    List<Book> findBookListPriceHighToLow();
}
