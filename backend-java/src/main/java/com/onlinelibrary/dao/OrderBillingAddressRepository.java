package com.onlinelibrary.dao;

import com.onlinelibrary.entity.OrderBillingAddress;
import org.springframework.data.repository.CrudRepository;

public interface OrderBillingAddressRepository extends CrudRepository<OrderBillingAddress, Long> {
}
