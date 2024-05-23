package com.albertocode.studentSystem.controller;

import com.albertocode.studentSystem.model.Student;
import com.albertocode.studentSystem.repository.StudentRepository;
import com.albertocode.studentSystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Student")
public class studentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New Student id added";
    }

//    Student newStudent(@RequestBody Student newStudent){
//        return studentRepository.save(newStudent);
//    }
//    @GetMapping("/get")
//    List<Student> getAllStudents(){
//        return studentService.findAll();
//    }

    @GetMapping("/get")
        public List<Student> getAllStudents(){
            return studentService.getAllStudents();
        }



}
