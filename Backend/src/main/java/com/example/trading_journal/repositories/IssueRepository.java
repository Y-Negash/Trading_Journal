package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    Optional<List<Issue>> getIssueByTradeDate(String tradeDate);
}
