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

        Trade trade1 = new Trade("EUR/USD1", 650, 880, 500, 880, LocalDate.of(2024,10,14));
        Trade trade2 = new Trade("USD/JPY1", 1200, 1350, 1350, 600, LocalDate.of(2024,10,13));
        Trade trade3 = new Trade("GBP/USD1", 3566, 1700, 3700, 1700, LocalDate.of(2023,10,12));
        Trade trade4 = new Trade("AUD/USD1", 65, 170, 30, 170, LocalDate.of(2024,10,12));
        Trade trade5 = new Trade("USD/CAD1", 500, 800, 200, 800, LocalDate.of(2024,5,3));
        Trade trade6 = new Trade("EUR/GBP1", 300, 250, 300, 100, LocalDate.of(2024,11,16));
        Trade trade9 = new Trade("AUD/NZD1", 400, 650, 200, 650, LocalDate.of(2024,11,01));
        Trade trade10 = new Trade("EUR/USD2", 700, 1400, 500, 1400, LocalDate.of(2024,10,20));
        Trade trade11 = new Trade("GBP/USD2", 1200, 2000, 800, 2000, LocalDate.of(2024,10,15));
        Trade trade12 = new Trade("USD/JPY2", 1000, 1500, 600, 1500, LocalDate.of(2024,11,03));

        tradeRepository.save(trade4);
        tradeRepository.save(trade1);
        tradeRepository.save(trade3);
        tradeRepository.save(trade2);
        tradeRepository.save(trade5);
        tradeRepository.save(trade10);
        tradeRepository.save(trade6);
        tradeRepository.save(trade9);
        tradeRepository.save(trade11);
        tradeRepository.save(trade12);

        Issue earlyExit = new Issue(LocalDate.of(2024,10,14), "Exited Too Early", "Closed the trade too early due to fear of reversal. Should have trusted the original take profit target.");
        Issue marketTiming = new Issue(LocalDate.of(2024,10,13), "Missed Market Timing", "Forgot to check for London session open, which caused unexpected volatility.");
        Issue badRiskManagement = new Issue(LocalDate.of(2023,10,12), "No Stop Loss", "Entered without setting a stop loss, leading to a larger loss than expected.");
        Issue newsEvent = new Issue(LocalDate.of(2024,5,3), "News Disruption", "Jerome Powell speech caused sudden price spike, didn't account for scheduled news event.");
        Issue revengeTrade = new Issue(LocalDate.of(2024,11,16), "Revenge Trade", "Took a second trade immediately after a loss to try and recover, resulting in another loss.");
        Issue riskUnderControl = new Issue(LocalDate.of(2024,04,15), "Risk Managed Well", "Stuck to the plan by closing half the position at breakeven and letting the rest run.");
        Issue perfectExecution = new Issue(LocalDate.of(2024,06,03), "Perfect Execution", "Followed trading plan exactly, hitting take profit with minimal drawdown.");
        Issue overtrading = new Issue(LocalDate.of(2024,11,01), "Overtrading", "Took too many trades in one session without clear setups, resulting in unnecessary losses.");

        issueRepository.save(earlyExit);
        issueRepository.save(marketTiming);
        issueRepository.save(badRiskManagement);
        issueRepository.save(newsEvent);
        issueRepository.save(revengeTrade);
        issueRepository.save(riskUnderControl);
        issueRepository.save(perfectExecution);
        issueRepository.save(overtrading);
    }

}
