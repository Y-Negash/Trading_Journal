package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Trader;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TraderRepository extends JpaRepository<Trader, Long> {
}
