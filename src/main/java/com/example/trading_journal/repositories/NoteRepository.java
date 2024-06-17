package com.example.trading_journal.repositories;

import com.example.trading_journal.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
