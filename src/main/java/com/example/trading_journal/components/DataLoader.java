package com.example.trading_journal.components;

import com.example.trading_journal.models.Note;
import com.example.trading_journal.models.Trade;
import com.example.trading_journal.models.TradeTypeEnum;
import com.example.trading_journal.models.Trader;
import com.example.trading_journal.repositories.NoteRepository;
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
    NoteRepository noteRepository;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Trader trader1 = new Trader("Enoch", 5, 7);
        Trader trader2 = new Trader("Jade", 1, 3);
        Trader trader3 = new Trader("Bob", 2, 2);

        traderRepository.save(trader1);
        traderRepository.save(trader2);
        traderRepository.save(trader3);

        Trade trade1 = new Trade(TradeTypeEnum.BUY, 540, 600, "13:00", "12/06/24");
        Trade trade2 = new Trade(TradeTypeEnum.SELL, 660, 510, "1:00", "14/06/24");
        Trade trade3 = new Trade(TradeTypeEnum.SELL, 600, 410, "3:00", "10/06/24");
        Trade trade4 = new Trade(TradeTypeEnum.BUY, 333, 60, "19:00", "1/04/24");

        tradeRepository.save(trade1);
        tradeRepository.save(trade2);
        tradeRepository.save(trade3);
        tradeRepository.save(trade4);

        Note goodNote = new Note("Great trade, I analysed well!");
        Note okayNote = new Note("This was quite average, I could've have improved here");
        Note badNote = new Note("This is one of the worst I've done :( ");

        noteRepository.save(goodNote);
        noteRepository.save(okayNote);
        noteRepository.save(badNote);
    }

}
