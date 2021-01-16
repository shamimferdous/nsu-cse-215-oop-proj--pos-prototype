package net.binarypoets.pos.service;

import net.binarypoets.pos.exception.FourOFourException;
import net.binarypoets.pos.model.Item;
import net.binarypoets.pos.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService extends ServiceSkeleton<Item> {

    @Autowired
    ItemRepository itemRepository;


    @Override
    public Item create(Item item) {
        return itemRepository.save(item);
    }


    @Override
    public List<Item> getAll() {
        List<Item> items = new ArrayList<>();

        itemRepository.findAll().forEach(x -> items.add(x));

        return items;
    }

    @Override
    public Item getById(long id) {
        return null;
    }


    @Override
    public Item update(long itemId, Item itemPayload) throws FourOFourException {

        Optional<Item> getItem = itemRepository.findById(itemId);
        Item updatedItem;

        if(getItem.isPresent()) {
            itemPayload.setId(itemId);
            updatedItem = itemRepository.save(itemPayload);
        } else {
            throw new FourOFourException("No item associated with this primary key was found!");
        }

        return updatedItem;
    }


    @Override
    public void delete(long itemId) throws FourOFourException  {
        Optional<Item> getItem = itemRepository.findById(itemId);

        if(getItem.isPresent()) {
            itemRepository.deleteById(itemId);
        } else {
            throw new FourOFourException("No item associated with this primary key was found!");
        }
    }
}
