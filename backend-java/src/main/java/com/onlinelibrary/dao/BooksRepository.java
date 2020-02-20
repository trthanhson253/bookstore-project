package com.onlinelibrary.dao;

import com.onlinelibrary.entity.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface BooksRepository extends CrudRepository<Book,Long> {
    
    List<Book> findByIsbnContaining(String isbn);

    List<Book> findByPublisherContaining(String publisher);

    List<Book> findByAuthorContaining(String author);

    List<Book> findByTitleContaining(String title);

    @Query("select b from Book b where b.title like %:keyword% or b.author like %:keyword% or b.publisher like %:keyword% or b.isbn like %:keyword%")
    List<Book> findAllBook(String keyword);

    @Query(nativeQuery=true,value="SELECT books.cates_id FROM books WHERE books.id = :bookId")
    Long findCatesIdFromBooksId(Long bookId);

    @Query(nativeQuery=true,value="SELECT * FROM books WHERE books.id <> :bookId and books.cates_id=:catesId ORDER BY RAND() DESC LIMIT 4")
    List<Book> findRelatedBooks(Long bookId, Long catesId);

    @Query(nativeQuery=true,value="SELECT * FROM books ORDER BY books.list_price ASC")
    List<Book> findBookListPriceLowToHigh();

    @Query(nativeQuery=true,value="SELECT * FROM books ORDER BY books.list_price DESC")
    List<Book> findBookListPriceHighToLow();
}
