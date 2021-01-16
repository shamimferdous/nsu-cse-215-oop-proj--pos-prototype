package net.binarypoets.pos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import net.binarypoets.pos.model.Item;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
