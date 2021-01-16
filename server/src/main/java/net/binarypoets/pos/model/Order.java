package net.binarypoets.pos.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column
    private long id;

    @Column
    private int tableNo;

    @Column
    private String waiter;

    @Column
    private String items;

    @Column
    private double totalAmount;

    @Column
    private boolean paid;

    @Column
    private String paymentMethod;

    @Column
    private Date timestamp;


    //defining the isValid method
    public boolean isValid() {
        if(tableNo == 0 || waiter.isEmpty() || items.isEmpty() || totalAmount <= 200) {
            return false;
        }

        return true;
    }


    //defining all the getter methods
    public long getId() {
        return id;
    }

    public int getTableNo() {
        return tableNo;
    }

    public String getWaiter() {
        return waiter;
    }

    public String getItems() {
        return items;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public boolean getPaid() {
        return paid;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public Date getTimestamp() {
        return timestamp;
    }


    //defining all the setter methods
    public void setId(long id) {
        this.id = id;
    }

    public void setTableNo(int tableNo) {
        this.tableNo = tableNo;
    }

    public void setWaiter(String waiter) {
        this.waiter = waiter;
    }

    public void setItems(String items) {
        this.items = items;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public void setPaid(boolean paid) {
        paid = paid;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", tableNo=" + tableNo +
                ", waiter='" + waiter + '\'' +
                ", items='" + items + '\'' +
                ", totalAmount=" + totalAmount +
                ", isPaid=" + paid +
                ", paymentMethod='" + paymentMethod + '\'' +
                ", timestamp=" + timestamp +
                '}';
    }
}
