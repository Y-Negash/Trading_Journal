package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {
}
