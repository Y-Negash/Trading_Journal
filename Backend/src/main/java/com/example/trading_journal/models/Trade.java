package com.example.trading_journal.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Trade {

//  PROPERTIES

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tradeId;

    @Column
    private String name;

    @Column(name = "entry_point")
    private double entryPoint;

    @Column(name = "exit_point")
    private double exitPoint;

    @Column(name = "stop_loss")
    private double stopLoss;

    @Column(name = "take_profit")
    private double takeProfit;

    @Column(name = "trade_date")
    private String tradeDate;

    @JsonIgnoreProperties({"issue"})
    @OneToMany(mappedBy = "trade", cascade = CascadeType.ALL)
    private List<Issue> issues = new ArrayList<>(); // already assigned to empty list so doesn't need to be added to constructor

//    CONSTRUCTORS

    public Trade(){}

    public Trade(String name, double entryPoint, double exitPoint, double stopLoss, double takeProfit, String tradeDate) {
        this.name = name;
        this.entryPoint = entryPoint;
        this.exitPoint = exitPoint;
        this.stopLoss = stopLoss;
        this.takeProfit = takeProfit;
        this.tradeDate = tradeDate;
    }

    // METHODS

    public void addIssue(Issue issue){
        this.issues.add(issue);
        issue.setTrade(this);
    };

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

    public String getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(String tradeDate) {
        this.tradeDate = tradeDate;
    }

    public List<Issue> getIssues() {
        return issues;
    }

    public void setIssues(List<Issue> issues) {
        this.issues = issues;
    }
}
