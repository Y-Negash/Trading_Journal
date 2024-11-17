package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
    @Query(value = "SELECT x FROM Issue  x WHERE x.tradeDate >=:startDate")
    List<Issue> findAllWithStartDateAfter(@Param("startDate") LocalDate startDate);
}
