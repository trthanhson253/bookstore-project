package com.onlinelibrary.dao;

import com.onlinelibrary.entity.UserPayment;
import org.springframework.data.repository.CrudRepository;

public interface UserPaymentRepository extends CrudRepository<UserPayment, Long> {

}
