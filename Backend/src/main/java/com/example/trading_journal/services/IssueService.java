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

    public List<Issue> getAllNotes(){
        return issueRepository.findAll();
    }

    public Optional<Issue> getNoteById(Long id) {
        return issueRepository.findById(id);
    }

}
