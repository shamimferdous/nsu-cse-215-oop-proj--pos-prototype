package net.binarypoets.pos.controller;

import net.binarypoets.pos.exception.FourOFourException;
import net.binarypoets.pos.model.Item;
import net.binarypoets.pos.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/items") //setting the base Url
@CrossOrigin(origins = "http://localhost:8000")
public class ItemController {

    @Autowired
    ItemService itemService;

    //create new item api
    @PostMapping("/")
    public ResponseEntity<Item> createItem(@RequestBody Item itemPayload) {

        if(itemPayload.isValidated()) {
            Item returnPayload = itemService.create(itemPayload);
            return new ResponseEntity<Item>(returnPayload, HttpStatus.CREATED);
        } else {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST
            );
        }

    }


    //retrieve all item api
    @GetMapping("/")
    public List<Item> getAllItems() {
        return itemService.getAll();
    }


    //update item by primary key api
    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable(value = "id") Long itemId, @RequestBody Item itemPayload) throws FourOFourException {

        if(itemPayload.isValidated()) {
            return  ResponseEntity.ok(itemService.update(itemId, itemPayload));
        } else {
            return ResponseEntity.badRequest().body(itemPayload);
        }

    }


    //delete item by primary key api
    @DeleteMapping("/{id}")
    public ResponseEntity deleteItem(@PathVariable(value = "id") Long itemId) throws FourOFourException {
        itemService.delete(itemId);

        return ResponseEntity.noContent().build();
    }

}
