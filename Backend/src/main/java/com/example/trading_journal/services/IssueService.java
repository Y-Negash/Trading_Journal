package com.example.trading_journal.services;

import com.example.trading_journal.models.Issue;
import com.example.trading_journal.repositories.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IssueService {

    @Autowired
    IssueRepository issueRepository;

    public List<Issue> getAllIssues(){
        return issueRepository.findAll();
    }

    public Optional<Issue> getIssueById(Long id) {
        return issueRepository.findById(id);
    }

    public List<Issue> getIssueByDate(String tradeDate){
        return issueRepository.getIssueByTradeDate(tradeDate);
    }
}
