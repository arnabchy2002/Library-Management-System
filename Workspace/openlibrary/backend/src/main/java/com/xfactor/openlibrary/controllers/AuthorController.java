package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Author;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.xfactor.openlibrary.domain.Author;
import com.xfactor.openlibrary.repositories.AuthorRepository;

    @RestController
    @RequestMapping("/author")
    public class AuthorController
    {
        private AuthorRepository authorRepository;
        
        public AuthorController(AuthorRepository authorRepository) {
            this.authorRepository = authorRepository;
        }
        @PostMapping("/saveAuthor")
        public Author saveAuthor(@RequestBody Author author)
        {
            authorRepository.save(author);
            return author;
            
        }
        @GetMapping("/getAllAuthors")
        public List<Author> getAuthor()
        {
            return authorRepository.findAll();
        }
        @DeleteMapping("delete/{id}")
        public void deleteAuthor(@PathVariable Long id) {
            authorRepository.deleteById(id);
        }
    }

