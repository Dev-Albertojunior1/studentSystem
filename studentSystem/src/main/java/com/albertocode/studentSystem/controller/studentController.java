package com.albertocode.studentSystem.controller;

import com.albertocode.studentSystem.model.Student;
import com.albertocode.studentSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class studentController {

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/student")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }

    @GetMapping("/studentss")
    List<Student> getAllStudents(){

        return studentRepository.findAll();


    }


}
