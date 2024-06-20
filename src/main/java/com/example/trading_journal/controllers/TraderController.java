package com.example.trading_journal.controllers;

import com.example.trading_journal.models.Trader;
import com.example.trading_journal.models.TraderDTO;
import com.example.trading_journal.services.TraderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        Optional<Trader> trader = traderService.getTraderById(id);
        if(trader.isPresent()){
            return new ResponseEntity<>(trader.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}/edit")
    public ResponseEntity<Trader> updateTrader(@RequestBody TraderDTO traderDTO, @PathVariable long id) {
        Optional<Trader> trader = traderService.getTraderById(id);
        if (trader.isPresent()) {
            Trader updatedTrader = traderService.updateTrader(traderDTO, id);
            return new ResponseEntity<>(updatedTrader, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
