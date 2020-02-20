package com.onlinelibrary.dao;

import com.onlinelibrary.entity.OrderPayment;
import org.springframework.data.repository.CrudRepository;

public interface OrderPaymentRepository extends CrudRepository<OrderPayment, Long> {
}
