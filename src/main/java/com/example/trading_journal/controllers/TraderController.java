package com.example.trading_journal.controllers;

import com.example.trading_journal.models.Trader;
import com.example.trading_journal.services.TraderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
