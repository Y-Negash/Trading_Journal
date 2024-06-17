package com.example.trading_journal.models;

public class Note {

//    PROPERTIES

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
