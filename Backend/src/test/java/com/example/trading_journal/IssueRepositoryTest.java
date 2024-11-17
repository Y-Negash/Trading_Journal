package com.example.trading_journal;

import com.example.trading_journal.models.Issue;
import com.example.trading_journal.repositories.IssueRepository;
import com.example.trading_journal.services.DateFilterService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;

@SpringBootTest
public class IssueRepositoryTest {

    @Autowired
    IssueRepository issueRepository;

    @Autowired
    DateFilterService dateFilterService;
    @BeforeEach
    public void setUp() {
        issueRepository.deleteAll();

        issueRepository.save(new Issue(LocalDate.of(2024, 10, 14), "Issue 1", "Great trade, I analysed well!"));
        issueRepository.save(new Issue(LocalDate.of(2024, 10, 13), "Issue 2", "This was quite average, I could've have improved here"));
        issueRepository.save(new Issue(LocalDate.of(2024, 11, 16), "Issue 3", "This is one of the worst I've done :( "));
        issueRepository.save(new Issue(LocalDate.of(2024, 5, 3), "Issue 3", "This is one of the worst I've done :( "));
    }

    @Test
    void canFindAllWithStartDateAfter() {
        String filter = "past-week";
        LocalDate startDate = dateFilterService.getStartDate(filter);
        List<Issue> issues = issueRepository.findAllWithStartDateAfter(startDate);
        assertThat(issues).hasSize(1);
        assertThat(issues.get(0).getTradeDate()).isAfterOrEqualTo(startDate);

    }
}

