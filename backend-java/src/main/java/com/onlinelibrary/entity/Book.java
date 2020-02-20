package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name="books")
public class Book extends BaseEntity {

    private String title;
    private String author;
    private String publisher;
    private String publicationDate;
    private String isbn;
    private String language;
    private int numberOfPages;
    private String format;
    private double shippingWeight;
    private double listPrice;
    private double ourPrice;
    private boolean active=true;
    private int inStockNumber;
    @Transient
    private MultipartFile bookImage;
    @Column(columnDefinition="text")
    private String description;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="cates_id")
    private Cates cates;

    @OneToMany(mappedBy ="book")
    @JsonIgnore
    private List<Comment> commentList;

    @ManyToOne
    @JoinColumn(name="wishlistcart_id")
    private WishListCart wishListCart;

    public Book() {
    }

    public List<Comment> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public String getPublicationDate() {
        return publicationDate;
    }

    public void setPublicationDate(String publicationDate) {
        this.publicationDate = publicationDate;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int getNumberOfPages() {
        return numberOfPages;
    }

    public void setNumberOfPages(int numberOfPages) {
        this.numberOfPages = numberOfPages;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public double getShippingWeight() {
        return shippingWeight;
    }

    public void setShippingWeight(double shippingWeight) {
        this.shippingWeight = shippingWeight;
    }

    public double getListPrice() {
        return listPrice;
    }

    public void setListPrice(double listPrice) {
        this.listPrice = listPrice;
    }

    public double getOurPrice() {
        return ourPrice;
    }

    public void setOurPrice(double ourPrice) {
        this.ourPrice = ourPrice;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public int getInStockNumber() {
        return inStockNumber;
    }

    public void setInStockNumber(int inStockNumber) {
        this.inStockNumber = inStockNumber;
    }

    public MultipartFile getBookImage() {
        return bookImage;
    }

    public void setBookImage(MultipartFile bookImage) {
        this.bookImage = bookImage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Cates getCates() {
        return cates;
    }

    public void setCates(Cates cates) {
        this.cates = cates;
    }
}
