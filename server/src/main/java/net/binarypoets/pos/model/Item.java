package net.binarypoets.pos.model;

import javax.persistence.*;

@Entity
@Table(name = "items")
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column
    private long id;

    @Column
    private String name;

    @Column
    private String category;

    @Column
    private String unit;

    @Column
    private double unitPrice;


    //defining the validateItem method
    public boolean isValidated(Item item) {
        if(item.name.isEmpty() || item.category.isEmpty() || item.unit.isEmpty() || item.unitPrice <= 100) {
            return false;
        }

        return true;
    }

    //defining the getter methods
    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }

    public String getUnit() {
        return unit;
    }

    public double getUnitPrice() {
        return unitPrice;
    }


    //defining the setter methods
    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", category='" + category + '\'' +
                ", unit='" + unit + '\'' +
                ", unitPrice=" + unitPrice +
                '}';
    }
}
