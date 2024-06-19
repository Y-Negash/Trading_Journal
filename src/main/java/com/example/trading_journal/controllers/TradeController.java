package com.example.trading_journal.controllers;

import com.example.trading_journal.models.Trade;
import com.example.trading_journal.services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/trades")
public class TradeController {

    @Autowired
    TradeService tradeService;

    @GetMapping
    public ResponseEntity<List<Trade>> getAllTrades(){
        List<Trade> trades = tradeService.getAllTrades();
        return new ResponseEntity<>(trades, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trade> getTradeById(@PathVariable Long id) {
        Trade trade = tradeService.getTradeById(id).orElse(null);
        if(trade != null){
            return new ResponseEntity<>(trade, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
