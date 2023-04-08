package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Loan;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.xfactor.openlibrary.domain.Loan;
import com.xfactor.openlibrary.repositories.LoanRepository;

    @RestController
    @RequestMapping("/loan")
    public class LoanController
    {
        private LoanRepository loanRepository;
        
        public LoanController(LoanRepository loanRepository) {
            this.loanRepository = loanRepository;
        }
        @PostMapping("/saveLoan")
        public Loan saveLoan(@RequestBody Loan loan)
        {
            loanRepository.save(loan);
            return loan;
            
        }
        @GetMapping("/getAllLoans")
        public List<Loan> getAllLoans()
        {
            return loanRepository.findAll();
        }
        @DeleteMapping("delete/{id}")
        public void deleteLoan(@PathVariable Long id) {
            loanRepository.deleteById(id);
        }
    }

