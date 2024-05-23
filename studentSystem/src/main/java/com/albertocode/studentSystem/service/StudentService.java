package com.albertocode.studentSystem.service;

import com.albertocode.studentSystem.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getAllStudents();

}
