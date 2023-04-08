package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Student;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.xfactor.openlibrary.domain.Student;
import com.xfactor.openlibrary.repositories.StudentRepository;

    @RestController
    @RequestMapping("/student")
    public class StudentController
    {
        private StudentRepository studentRepository;
        
        public StudentController(StudentRepository studentRepository) {
            this.studentRepository = studentRepository;
        }
        @PostMapping("/saveStudent")
        public Student saveStudent(@RequestBody Student student)
        {
            studentRepository.save(student);
            return student;
            
        }
        @GetMapping("/getAllStudent")
        public List<Student> getStudent()
        {
            return studentRepository.findAll();
        }
        @DeleteMapping("delete/{id}")
        public void deleteStudent(@PathVariable Long id) {
            studentRepository.deleteById(id);
        }
    }