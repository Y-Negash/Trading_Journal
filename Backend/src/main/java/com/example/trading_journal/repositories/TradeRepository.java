package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TradeRepository extends JpaRepository<Trade, Long> {
    @Query(value = "SELECT x FROM Trade  x WHERE x.tradeDate >=:startDate")
    List<Trade> findAllWithStartDateAfter(@Param("startDate") LocalDate startDate);
}
