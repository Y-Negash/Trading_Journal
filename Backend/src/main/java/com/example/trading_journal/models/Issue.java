package com.example.trading_journal.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Issue {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long issueId;

   @Column(name = "issueName")
   private String issueName;

   @Column(name = "issueDescription")
   private String issueDescription;

   @JsonIgnore
   @ManyToOne
   @JoinColumn(name = "trade_id")
   private Trade trade;

    public Issue() {}

    public Issue(String issueName, String issueDescription) {
        this.issueName = issueName;
        this.issueDescription = issueDescription;
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
