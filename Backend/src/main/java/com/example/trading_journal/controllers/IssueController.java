package com.example.trading_journal.controllers;

import com.example.trading_journal.models.Issue;
import com.example.trading_journal.services.IssueService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/issues")
public class IssueController {

    @Autowired
    IssueService issueService;

    @GetMapping
    public ResponseEntity<List<Issue>> getAllIssues(){
        List<Issue> issues = issueService.getAllIssues();
        return new ResponseEntity<>(issues, HttpStatus.OK);
    }

    @GetMapping("/{id")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long id){
        Optional<Issue> issue = issueService.getIssueById(id);
        if(issue.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(issue.get(), HttpStatus.OK);
        }
    }
}
