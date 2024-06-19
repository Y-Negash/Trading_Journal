package com.example.trading_journal.services;

import com.example.trading_journal.models.Trade;
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

    public Trade addTrade(Trade trade){
       return tradeRepository.save(trade);
    }
}
