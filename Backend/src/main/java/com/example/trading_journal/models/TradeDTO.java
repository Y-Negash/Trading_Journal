package com.example.trading_journal.models;

public class TradeDTO {

    private String name;
    private double entryPoint;
    private double exitPoint;
    private double stopLoss;
    private double takeProfit;
    private String dateOfCreation;
    private String issueName;
    private String issueDescription;


    public TradeDTO(){}

    public TradeDTO(String name, double entryPoint, int exitPoint, int stopLoss, int takeProfit, String dateOfCreation, String issueName, String issueDescription) {
        this.name = name;
        this.entryPoint = entryPoint;
        this.exitPoint = exitPoint;
        this.stopLoss = stopLoss;
        this.takeProfit = takeProfit;
        this.dateOfCreation = dateOfCreation;
        this.issueName = issueName;
        this.issueDescription = issueDescription;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getEntryPoint() {
        return entryPoint;
    }

    public void setEntryPoint(double entryPoint) {
        this.entryPoint = entryPoint;
    }

    public double getExitPoint() {
        return exitPoint;
    }

    public void setExitPoint(double exitPoint) {
        this.exitPoint = exitPoint;
    }

    public double getStopLoss() {
        return stopLoss;
    }

    public void setStopLoss(double stopLoss) {
        this.stopLoss = stopLoss;
    }

    public double getTakeProfit() {
        return takeProfit;
    }

    public void setTakeProfit(double takeProfit) {
        this.takeProfit = takeProfit;
    }

    public String getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(String dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }

    public String getIssueName() {
        return issueName;
    }

    public void setIssueName(String issueName) {
        this.issueName = issueName;
    }

    public String getIssueDescription() {
        return issueDescription;
    }

    public void setIssueDescription(String issueDescription) {
        this.issueDescription = issueDescription;
    }
}
