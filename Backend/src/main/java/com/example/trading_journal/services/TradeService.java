package com.example.trading_journal.services;

import com.example.trading_journal.models.Issue;
import com.example.trading_journal.models.Trade;
import com.example.trading_journal.models.TradeDTO;
import com.example.trading_journal.repositories.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TradeService {

    @Autowired
    TradeRepository tradeRepository;

    public List<Trade> getAllTrades(){
        return tradeRepository.findAll();
    }

    public Optional<Trade> getTradeById(Long id){
        return tradeRepository.findById(id);
    }

    public Trade addTrade(TradeDTO tradeDTO){
        Trade trade = new Trade(
                tradeDTO.getName(),
                tradeDTO.getEntryPoint(),
                tradeDTO.getExitPoint(),
                tradeDTO.getStopLoss(),
                tradeDTO.getTakeProfit(),
                tradeDTO.getTradeDate()
        );

        if(tradeDTO.getIssueName() != null || tradeDTO.getIssueDescription() != null ){
            Issue issue = new Issue(tradeDTO.getIssueName(), tradeDTO.getIssueDescription());
//            issue.setTrade(trade);
            trade.addIssue(issue);
        }

        return tradeRepository.save(trade);
    };

    public void deleteTrade(Long id) {
        Optional<Trade> trade = tradeRepository.findById(id);
        if(trade.isPresent()){
            tradeRepository.delete(trade.get());
        }
    }
}
