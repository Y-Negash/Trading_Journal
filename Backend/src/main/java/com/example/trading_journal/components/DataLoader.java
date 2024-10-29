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

        Trade trade1 = new Trade("EUR/USD1",650,344,333,241,"14/10/2024");
        Trade trade2 = new Trade("USD/JPY1",50,34,3,4,"13/10/2024");
        Trade trade3 = new Trade("GBP/USD1",86,45,30,20,"12/10/2024");
        Trade trade4 = new Trade("AUD/USD1",65,44,33,41,"11/10/2024");


        tradeRepository.save(trade4);
        tradeRepository.save(trade1);
        tradeRepository.save(trade3);
        tradeRepository.save(trade2);

        Issue goodNote = new Issue("Issue 1","Great trade, I analysed well!");
        Issue okayNote = new Issue("Issue 2","This was quite average, I could've have improved here");
        Issue badNote = new Issue("Issue 3","This is one of the worst I've done :( ");

        issueRepository.save(goodNote);
        issueRepository.save(okayNote);
        issueRepository.save(badNote);
    }

}
