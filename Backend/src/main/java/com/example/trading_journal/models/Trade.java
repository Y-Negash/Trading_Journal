package com.example.trading_journal.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Trade {

//  PROPERTIES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tradeId;

    private String name;

    private int entryPoint;

    private int exitPoint;

    private int stopLoss;

    private int takeProfit;

    private String dateOfCreation;

//    CONSTRUCTORS

    public Trade(){}

    public Trade(String name, int entryPoint, int exitPoint, int stopLoss, int takeProfit, String dateOfCreation) {
        this.name = name;
        this.entryPoint = entryPoint;
        this.exitPoint = exitPoint;
        this.stopLoss = stopLoss;
        this.takeProfit = takeProfit;
        this.dateOfCreation = dateOfCreation;
    }

//    GETTERS AND SETTERS


    public long getTradeId() {
        return tradeId;
    }

    public void setTradeId(long tradeId) {
        this.tradeId = tradeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getEntryPoint() {
        return entryPoint;
    }

    public void setEntryPoint(int entryPoint) {
        this.entryPoint = entryPoint;
    }

    public int getExitPoint() {
        return exitPoint;
    }

    public void setExitPoint(int exitPoint) {
        this.exitPoint = exitPoint;
    }

    public int getStopLoss() {
        return stopLoss;
    }

    public void setStopLoss(int stopLoss) {
        this.stopLoss = stopLoss;
    }

    public int getTakeProfit() {
        return takeProfit;
    }

    public void setTakeProfit(int takeProfit) {
        this.takeProfit = takeProfit;
    }

    public String getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(String dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }
}
