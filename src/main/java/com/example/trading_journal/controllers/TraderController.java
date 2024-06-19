package com.example.trading_journal.controllers;

import com.example.trading_journal.models.Trader;
import com.example.trading_journal.models.TraderDTO;
import com.example.trading_journal.services.TraderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/traders")
public class TraderController {

    @Autowired
    TraderService traderService;

    @GetMapping
    public ResponseEntity<List<Trader>> getAllTraders(){
        List<Trader> traders = traderService.getAllTraders();
        return new ResponseEntity<>(traders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Trader> getTrader(@PathVariable long id){
        Trader trader = traderService.getTraderById(id).orElse(null);
        if(trader != null){
            return new ResponseEntity<>(trader, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}/ratio")
    public ResponseEntity<Trader> updateTrader(@RequestBody TraderDTO traderDTO, @PathVariable long id) {
        Trader trader = traderService.getTraderById(id).orElse(null);
        // check if Trader exists
        if (trader != null) {
            // set properties to updated version using setters
            trader.setNumOfWins(traderDTO.getNumOfWins());
            trader.setNumOfTrades(traderDTO.getNumOfTrades());
            return new ResponseEntity<>(trader, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(trader, HttpStatus.NOT_FOUND);
        }
    }
}
