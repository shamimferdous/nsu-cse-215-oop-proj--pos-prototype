package net.binarypoets.pos.controller;

import net.binarypoets.pos.exception.FourOFourException;
import net.binarypoets.pos.model.Order;
import net.binarypoets.pos.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/orders") //setting the base url
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    OrderService orderService;

    //create new order api
    @PostMapping("/")
    public ResponseEntity<Order> createOrder(@RequestBody Order orderPayload) {

        orderPayload.setTimestamp(new Date());

        if (orderPayload.isValid()) {

            Order returnPayload = orderService.create(orderPayload);

            return new ResponseEntity<Order>(returnPayload, HttpStatus.CREATED);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST
            );
        }
    }


    //get all orders api
    @GetMapping("/")
    public List<Order> getAllOrders() {
        return orderService.getAll();
    }


    //get order by primary key api
    @GetMapping("/{id}")
    public ResponseEntity<Order> getSingleOrder(@PathVariable(name = "id") Long orderId) throws FourOFourException {
        Order order = orderService.getById(orderId);

        return new ResponseEntity<Order>(order, HttpStatus.OK);
    }


    //update order by primary key api

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable(value = "id") Long orderId, @RequestBody Order orderPayload) throws FourOFourException {

        if (orderPayload.isValid()) {
            return ResponseEntity.ok(orderService.update(orderId, orderPayload));
        } else {
            return ResponseEntity.badRequest().body(orderPayload);
        }

    }


}
