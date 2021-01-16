package net.binarypoets.pos.service;

import net.binarypoets.pos.exception.FourOFourException;
import net.binarypoets.pos.model.Item;
import net.binarypoets.pos.model.Order;
import net.binarypoets.pos.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService extends ServiceSkeleton<Order>{

    @Autowired
    OrderRepository orderRepository;

    @Override
    public Order create(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAll() {
        List<Order> orders = new ArrayList<Order>();

        orderRepository.findAll().forEach(order -> orders.add(order));
        return orders;
    }

    @Override
    public Order getById(long orderId) throws FourOFourException{
        Optional<Order> getOrder = orderRepository.findById(orderId);

        if(!getOrder.isPresent()) {
            throw new FourOFourException("No order associated with the primary key was found!");
        }

        return getOrder.get();
    }

    @Override
    public Order update(long orderId, Order orderPayload) throws FourOFourException {

        Optional<Order> getOrder = orderRepository.findById(orderId);
        Order updatedOrder;

        if(getOrder.isPresent()) {
            orderPayload.setId(orderId);
            updatedOrder = orderRepository.save(orderPayload);
        } else {
            throw new FourOFourException("No item associated with this primary key was found!");
        }

        return updatedOrder;
    }

    @Override
    public void delete(long id) throws FourOFourException {

    }
}
