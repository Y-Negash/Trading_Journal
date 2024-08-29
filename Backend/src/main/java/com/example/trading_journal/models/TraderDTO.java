package com.example.trading_journal.models;

public class TraderDTO {

    private int numOfWins;
    private int numOfTrades;

    public TraderDTO(){}

    public TraderDTO(int numOfWins, int numOfTrades){
        this.numOfWins = numOfWins;
        this.numOfTrades = numOfTrades;
    }

    public int getNumOfWins() {
        return numOfWins;
    }

    public void setNumOfWins(int numOfWins) {
        this.numOfWins = numOfWins;
    }

    public int getNumOfTrades() {
        return numOfTrades;
    }

    public void setNumOfTrades(int numOfTrades) {
        this.numOfTrades = numOfTrades;
    }
}

