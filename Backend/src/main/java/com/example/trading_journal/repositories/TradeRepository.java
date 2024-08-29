package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {
}
