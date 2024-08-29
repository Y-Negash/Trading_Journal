package com.example.trading_journal.models;

public class TradeDTO {

    private TradeTypeEnum tradeType;
    private int stopLossVal;
    private int takeProfit;
    private String timeOfCreation;
    private String dateOfCreation;

    public TradeDTO(){}

    public TradeDTO(TradeTypeEnum tradeType, int stopLossVal, int takeProfit, String timeOfCreation, String dateOfCreation) {
        this.tradeType = tradeType;
        this.stopLossVal = stopLossVal;
        this.takeProfit = takeProfit;
        this.timeOfCreation = timeOfCreation;
        this.dateOfCreation = dateOfCreation;
    }

    public TradeTypeEnum getTradeType() {
        return tradeType;
    }

    public void setTradeType(TradeTypeEnum tradeType) {
        this.tradeType = tradeType;
    }

    public int getStopLossVal() {
        return stopLossVal;
    }

    public void setStopLossVal(int stopLossVal) {
        this.stopLossVal = stopLossVal;
    }

    public int getTakeProfit() {
        return takeProfit;
    }

    public void setTakeProfit(int takeProfit) {
        this.takeProfit = takeProfit;
    }

    public String getTimeOfCreation() {
        return timeOfCreation;
    }

    public void setTimeOfCreation(String timeOfCreation) {
        this.timeOfCreation = timeOfCreation;
    }

    public String getDateOfCreation() {
        return dateOfCreation;
    }

    public void setDateOfCreation(String dateOfCreation) {
        this.dateOfCreation = dateOfCreation;
    }
}
