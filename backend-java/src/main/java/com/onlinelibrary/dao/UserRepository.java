package com.onlinelibrary.dao;

import com.onlinelibrary.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User,Long> {

    User findByUsername(String username);

    User findByEmail(String email);

    User findByName(String name);
}
