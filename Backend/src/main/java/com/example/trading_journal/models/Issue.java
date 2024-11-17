package com.example.trading_journal.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Issue {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long issueId;

   @Column(name = "issueName")
   private String issueName;

   @Column(name = "issueDescription")
   private String issueDescription;

   @Column(name = "tradeDate")
   private LocalDate tradeDate;

   @JsonIgnore
   @ManyToOne
   @JoinColumn(name = "trade_id")
   private Trade trade;

    public Issue() {}

    public Issue(LocalDate tradeDate, String issueName, String issueDescription) {
        this.tradeDate = tradeDate;
        this.issueName = issueName;
        this.issueDescription = issueDescription;
    }

    public LocalDate getTradeDate(){
        return tradeDate;
    }

    public void setTradeDate(LocalDate tradeDate){
        this.tradeDate = tradeDate;
    }

    public Long getIssueId(){
        return issueId;
    }

    public void setIssueId(Long issueId){
        this.issueId = issueId;
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

    public Trade getTrade() {
        return trade;
    }

    public void setTrade(Trade trade) {
        this.trade = trade;
    }

}
