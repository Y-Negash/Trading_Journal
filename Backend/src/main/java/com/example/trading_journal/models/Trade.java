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
    private int entryPoint;

    @Column(name = "exit_point")
    private int exitPoint;

    @Column(name = "stop_loss")
    private int stopLoss;

    @Column(name = "take_profit")
    private int takeProfit;

    @Column(name = "date_of_creation")
    private String dateOfCreation;

    @JsonIgnoreProperties({"issue"})
    @OneToMany(mappedBy = "trade", cascade = CascadeType.ALL)
    private List<Issue> issues = new ArrayList<>(); // already assigned to empty list so doesn't need to be added to constructor

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

    public List<Issue> getIssues() {
        return issues;
    }

    public void setIssues(List<Issue> issues) {
        this.issues = issues;
    }
}
