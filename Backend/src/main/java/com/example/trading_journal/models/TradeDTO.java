package com.example.trading_journal.models;

public class TradeDTO {

    private String name;
    private int entryPoint;
    private int exitPoint;
    private int stopLoss;
    private int takeProfit;
    private String dateOfCreation;

    public TradeDTO(){}

    public TradeDTO(String name, int entryPoint, int exitPoint, int stopLoss, int takeProfit, String dateOfCreation) {
        this.name = name;
        this.entryPoint = entryPoint;
        this.exitPoint = exitPoint;
        this.stopLoss = stopLoss;
        this.takeProfit = takeProfit;
        this.dateOfCreation = dateOfCreation;
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
