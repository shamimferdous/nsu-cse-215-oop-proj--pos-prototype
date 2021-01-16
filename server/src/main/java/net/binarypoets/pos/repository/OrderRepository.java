package net.binarypoets.pos.repository;

import net.binarypoets.pos.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
