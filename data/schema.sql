CREATE DATABASE student_performance;
USE student_performance;
-- Create the 'students' table
CREATE TABLE students (
    student_id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100),
    gender VARCHAR(10),
    grade_level INT
);
-- Create the 'subjects' table
CREATE TABLE subjects (
    subject_id INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(50)
);
-- Create the 'student_performance' table
CREATE TABLE student_performance (
    performance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(10),
    subject_id INT,
    attendance DECIMAL(5, 2),
    quiz_avg DECIMAL(5, 2),
    exam_score DECIMAL(5, 2),
    final_grade DECIMAL(5, 2),
    participation DECIMAL(5, 2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id)
);
