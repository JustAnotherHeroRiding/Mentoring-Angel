package stipsa.StipsaBackEnd.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String category;
    private double amount;
    private String currency;
    private Date date;
    private Long senderId;
    private Long receiverId;

    protected Transaction() {
    }

    public Transaction(String category, double amount, String currency, Date date, Long senderId, Long receiverId) {
        this.category = category;
        this.amount = amount;
        this.currency = currency;
        this.date = date;
        this.senderId = senderId;
        this.receiverId = receiverId;
    }

    @Override
    public String toString() {
        return String.format(
                "Transaction[id=%d, category='%s', amount=%.2f, currency='%s', date='%s', senderId=%d, receiverId=%d]",
                id, category, amount, currency, date, senderId, receiverId);
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }

    public double getAmount() {
        return amount;
    }

    public String getCurrency() {
        return currency;
    }

    public Date getDate() {
        return date;
    }

    public Long getSenderId() {
        return senderId;
    }

    public Long getReceiverId() {
        return receiverId;
    }

}