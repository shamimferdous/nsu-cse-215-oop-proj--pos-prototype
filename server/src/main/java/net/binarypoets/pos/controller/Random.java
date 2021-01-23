package net.binarypoets.pos.controller;

import net.binarypoets.pos.model.Item;
import net.binarypoets.pos.repository.ItemRepository;
import net.binarypoets.pos.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Random {

    @Autowired
    ItemRepository itemRepository;

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public void getHello(@RequestBody Map<String, Object>[] payload) {
        System.out.println(payload[0]);
    }

    @RequestMapping(value = "/test", method = RequestMethod.POST)
    public void testDB() {
        long id = 3;
        Optional<Item> item = itemRepository.findById(id);
        System.out.println(item);
        System.out.println(item.get().getName());
    }
}
