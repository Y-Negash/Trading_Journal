package com.example.trading_journal.services;

import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class DateFilterService {

    public LocalDate getStartDate(String status){
        LocalDate startDate = LocalDate.now();
        String statusLCase = status.toLowerCase();

        if ("past-week".equals(statusLCase)) {
             return startDate.minusWeeks(1);
        } else if ("past-month".equals(statusLCase)) {
            return startDate.minusMonths(1);

        } else if ("past-3-months".equals(statusLCase)) {
            return startDate.minusMonths(3);

        } else if ("past-6-months".equals(statusLCase)) {
            return startDate.minusMonths(6);

        } else if ("past-year".equals(statusLCase)) {
            return startDate.minusYears(1);
        } else {
            return startDate;
        }
    }
}

