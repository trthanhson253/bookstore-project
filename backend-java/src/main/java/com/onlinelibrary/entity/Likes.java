package com.onlinelibrary.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Likes extends BaseEntity {


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="comment_id")
    @JsonIgnore
    private Comment comment;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
