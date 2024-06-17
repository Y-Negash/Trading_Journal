package com.example.trading_journal.models;

public class Trader {

//    PROPERTIES

    private long id;

    private String name;

    private int numOfWins;

    private int numOfTrades;

//    CONSTRUCTORS

    public Trader(){}

    public Trader(String name, int numOfWins, int numOfTrades){
        this.name = name;
        this.numOfWins = numOfWins;
        this.numOfTrades = numOfTrades;
    }

//    GETTERS AND SETTERS

    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id = id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getNumOfWins(){
        return numOfWins;
    }

    public void setNumOfWins(int numOfWins){
        this.numOfWins = numOfWins;
    }

    public int getNumOfTrades(){
        return numOfTrades;
    }

    public void setNumOfTrades(int numOfTrades){
        this.numOfTrades = numOfTrades;
    }

}
