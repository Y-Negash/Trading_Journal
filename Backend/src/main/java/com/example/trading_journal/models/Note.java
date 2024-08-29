package com.example.trading_journal.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Note {

//    PROPERTIES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String text;

//    CONSTRUCTORS
    public Note(){}

    public Note(String text){
        this.text = text;
    }

//    GETTERS AND SETTERS
    public long getId(){
        return id;
    }

    public void setId(long id){
        this.id = id;
    }

    public String getText(){
        return text;
    }

    public void setText(String text){
        this.text = text;
    }
}
