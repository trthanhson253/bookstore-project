package com.onlinelibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlinelibrary.entity.Cates;
import org.springframework.data.repository.CrudRepository;

public interface CatesRepository extends CrudRepository<Cates,Long> {

}
