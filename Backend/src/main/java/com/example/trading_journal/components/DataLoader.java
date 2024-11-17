package com.example.trading_journal.components;

import com.example.trading_journal.models.Issue;
import com.example.trading_journal.models.Trade;
import com.example.trading_journal.models.Trader;
import com.example.trading_journal.repositories.IssueRepository;
import com.example.trading_journal.repositories.TradeRepository;
import com.example.trading_journal.repositories.TraderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TraderRepository traderRepository;

    @Autowired
    TradeRepository tradeRepository;

    @Autowired
    IssueRepository issueRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Trader trader1 = new Trader("Enoch", 5, 7);
        Trader trader2 = new Trader("Jade", 1, 3);
        Trader trader3 = new Trader("Bob", 2, 2);

        traderRepository.save(trader1);
        traderRepository.save(trader2);
        traderRepository.save(trader3);

        Trade trade1 = new Trade("EUR/USD1",650,344,333,241,LocalDate.of(2024,10,14));
        Trade trade2 = new Trade("USD/JPY1",50,34,3,4,LocalDate.of(2024,10,13));
        Trade trade3 = new Trade("GBP/USD1",86,45,30,20,LocalDate.of(2024,10,12));
        Trade trade4 = new Trade("AUD/USD1",65,44,33,41,LocalDate.of(2024,10,12));


        tradeRepository.save(trade4);
        tradeRepository.save(trade1);
        tradeRepository.save(trade3);
        tradeRepository.save(trade2);

        Issue goodIssue = new Issue(LocalDate.of(2024,10,14),"Issue 1","Great trade, I analysed well!");
        Issue okayIssue = new Issue(LocalDate.of(2024,10,13),"Issue 2","This was quite average, I could've have improved here");
        Issue badIssue = new Issue(LocalDate.of(2024,10,12),"Issue 3","This is one of the worst I've done :( ");
        Issue longAgoIssue = new Issue(LocalDate.of(2024,5,3),"Issue 3","This is one of the worst I've done :( ");
        Issue weekAgoIssue = new Issue(LocalDate.of(2024,11,16),"Issue 3","This is one of the worst I've done :( ");

        issueRepository.save(goodIssue);
        issueRepository.save(okayIssue);
        issueRepository.save(badIssue);
        issueRepository.save(longAgoIssue);
        issueRepository.save(weekAgoIssue);
    }

}
