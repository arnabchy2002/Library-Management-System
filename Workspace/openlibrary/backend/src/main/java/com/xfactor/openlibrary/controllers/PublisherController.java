package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Publisher;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.xfactor.openlibrary.domain.Publisher;
import com.xfactor.openlibrary.repositories.PublisherRepository;
    @RestController
    @RequestMapping("/publisher")
    public class PublisherController
    {
        private PublisherRepository publisherRepository;
        
        public PublisherController(PublisherRepository publisherRepository) {
            this.publisherRepository = publisherRepository;
        }
        @PostMapping("/savePublisher")
        public Publisher savePublisher(@RequestBody Publisher publisher)
        {
            publisherRepository.save(publisher);
            return publisher;
            
        }
        @GetMapping("/getAllPublisher")
        public List<Publisher> getPublisher()
        {
            return publisherRepository.findAll();
        }
        @DeleteMapping("delete/{id}")
        public void deletePublisher(@PathVariable Long id) {
            publisherRepository.deleteById(id);
        }
    }