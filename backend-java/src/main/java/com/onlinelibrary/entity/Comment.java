package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Comment extends BaseEntity {

    private String content;

//    private Integer likes;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="book_id")
    @JsonIgnore
    private Book book;

    @OneToMany(mappedBy ="comment")
    private List<ReplyComment> replyCommentList;

    @OneToMany(cascade=CascadeType.ALL, mappedBy = "comment")
    private List<Likes> likesList;


    public List<Likes> getLikesList() {
        return likesList;
    }

    public void setLikesList(List<Likes> likesList) {
        this.likesList = likesList;
    }

    public List<ReplyComment> getReplyCommentList() {
        return replyCommentList;
    }

    public void setReplyCommentList(List<ReplyComment> replyCommentList) {
        this.replyCommentList = replyCommentList;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getUser() {
        return user;
    }

//    public Integer getLikes() {
//        return likes;
//    }
//
//    public void setLikes(Integer likes) {
//        this.likes = likes;
//    }

    public void setUser(User user) {
        this.user = user;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
