package com.example.trading_journal.controllers;

import com.example.trading_journal.models.Trade;
import com.example.trading_journal.models.TradeDTO;
import com.example.trading_journal.services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @PostMapping
    public ResponseEntity<Trade> createNewTrade(@RequestBody Trade newTrade){
        Trade addedTrade= tradeService.addTrade(newTrade);
        return new ResponseEntity<>(addedTrade, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}/edit")
    public ResponseEntity<Trade> updateTrade(@PathVariable Long id, @RequestBody TradeDTO tradeDTO){
        Optional<Trade> trade = tradeService.getTradeById(id);
        if(trade.isPresent()){
            trade.get().setName(tradeDTO.getName());
            trade.get().setEntryPoint(tradeDTO.getEntryPoint());
            trade.get().setExitPoint(tradeDTO.getExitPoint());
            trade.get().setStopLoss(tradeDTO.getStopLoss());
            trade.get().setTakeProfit(tradeDTO.getTakeProfit());
            trade.get().setDateOfCreation(tradeDTO.getDateOfCreation());
            Trade updatedTrade = tradeService.addTrade(trade.get());

            return new ResponseEntity<>(updatedTrade, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeTrade(@PathVariable Long id){
        Optional<Trade> trade = tradeService.getTradeById(id);
        if(trade.isPresent()){
            tradeService.deleteTrade(id);
            return new ResponseEntity<>("Trade has been removed", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("This trade does not exist", HttpStatus.NOT_FOUND);
        }
    }
}

