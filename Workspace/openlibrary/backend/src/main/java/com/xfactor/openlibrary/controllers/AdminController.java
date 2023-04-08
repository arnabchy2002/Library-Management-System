package com.xfactor.openlibrary.controllers;
import com.xfactor.openlibrary.domain.Admin;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.xfactor.openlibrary.domain.Admin;
import com.xfactor.openlibrary.repositories.AdminRepository;
    @RestController
    @RequestMapping("/admin")
    public class AdminController
    {

        private AdminRepository adminRepository;
        public AdminController(AdminRepository adminRepository) {
            this.adminRepository = adminRepository;
        }
        @PostMapping("/saveAdmin")
        public Admin saveAdmin(@RequestBody Admin admin)
        {
            adminRepository.save(admin);
            return admin;
            
        }
        @GetMapping("/getAllAdmin")
        public List<Admin> getAdmin()
        {
            return adminRepository.findAll();
        }
        @DeleteMapping("delete/{id}")
        public void deleteAdmin(@PathVariable Long id) {
            adminRepository.deleteById(id);
        }
    }

