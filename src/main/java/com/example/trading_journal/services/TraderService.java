package com.example.trading_journal.services;

import com.example.trading_journal.models.Trader;
import com.example.trading_journal.repositories.TraderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TraderService {

    @Autowired
    TraderRepository traderRepository;

    public List<Trader> getAllTraders(){
        return traderRepository.findAll();
    }

    public Optional<Trader> getTraderById(Long id){
        return traderRepository.findById(id);
    }
}
