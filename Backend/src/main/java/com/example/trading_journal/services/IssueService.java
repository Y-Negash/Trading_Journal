package com.example.trading_journal.services;

import com.example.trading_journal.models.Issue;
import com.example.trading_journal.repositories.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class IssueService {

    @Autowired
    IssueRepository issueRepository;

    @Autowired
    DateFilterService dateFilterService;

    public List<Issue> getAllIssues(){
        return issueRepository.findAll();
    }

    public Optional<Issue> getIssueById(Long id) {
        return issueRepository.findById(id);
    }

    public List<Issue> getIssueByFilter(String filter){
        LocalDate startDate = dateFilterService.getStartDate(filter);
        return issueRepository.findAllWithStartDateAfter(startDate);
    }
}
