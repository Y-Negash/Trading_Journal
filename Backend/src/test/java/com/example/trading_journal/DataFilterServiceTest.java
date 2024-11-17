package com.example.trading_journal;

import com.example.trading_journal.services.DateFilterService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class DataFilterServiceTest {

    @Autowired
    DateFilterService dateFilterService;
    
    @Test
    void canCalculateStartDate(){
        LocalDate expectedStartDate = LocalDate.of(2024,11,17);
        LocalDate actualStartDate = LocalDate.now();
        System.out.println(actualStartDate);
        assertThat(expectedStartDate).isEqualTo(actualStartDate);
    }

    @Test
    void canCalculateDateAWeekAgo(){
        String filter = "Past Week";
        LocalDate startDate = dateFilterService.getStartDate(filter);
        assertThat(startDate).isEqualTo("2024-11-10");
    }

    @Test
    void canCalculateDateAMonthAgo(){
        String filter = "Past month";
        LocalDate startDate = dateFilterService.getStartDate(filter);
        assertThat(startDate).isEqualTo("2024-10-17");
    }


}
