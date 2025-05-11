-- Insert 30 students
INSERT INTO students (student_id, name, gender, grade_level) VALUES
('S001', 'Alice Santos', 'Female', 10),
('S002', 'John Reyes', 'Male', 10),
('S003', 'Maria Lopez', 'Female', 10),
('S004', 'Carlos Tan', 'Male', 10),
('S005', 'Grace Dela Cruz', 'Female', 10),
('S006', 'Leo Mendoza', 'Male', 10),
('S007', 'Diana Robles', 'Female', 10),
('S008', 'Mark Lim', 'Male', 10),
('S009', 'Hannah Gomez', 'Female', 10),
('S010', 'James Ong', 'Male', 10),
('S011', 'Ella Chua', 'Female', 10),
('S012', 'Ryan Sy', 'Male', 10),
('S013', 'Julia Ramos', 'Female', 10),
('S014', 'Miguel Cruz', 'Male', 10),
('S015', 'Patricia Dy', 'Female', 10),
('S016', 'Nathan Yu', 'Male', 10),
('S017', 'Angela Perez', 'Female', 10),
('S018', 'Victor Chan', 'Male', 10),
('S019', 'Kim Navarro', 'Female', 10),
('S020', 'Bryan Lopez', 'Male', 10),
('S021', 'Chloe Garcia', 'Female', 10),
('S022', 'Andre Bautista', 'Male', 10),
('S023', 'Samantha Quinto', 'Female', 10),
('S024', 'Joshua Lee', 'Male', 10),
('S025', 'Isabelle Go', 'Female', 10),
('S026', 'Kenneth Cruz', 'Male', 10),
('S027', 'Jasmine Tan', 'Female', 10),
('S028', 'Xander Villanueva', 'Male', 10),
('S029', 'Nicole Aquino', 'Female', 10),
('S030', 'Enzo Herrera', 'Male', 10);

-- Insert 5 subjects
INSERT INTO subjects (subject_name) VALUES
('Mathematics'),
('Science'),
('English'),
('Filipino'),
('History');

INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('1', 'S001', '1', '90.4', '79.93', '71.79', '75.05', '87.23');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('2', 'S001', '2', '92.24', '91.7', '99.07', '96.12', '91.67');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('3', 'S001', '3', '89.67', '82.31', '95.46', '90.2', '78.4');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('4', 'S001', '4', '89.46', '95.68', '83', '88.07', '87.84');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('5', 'S001', '5', '95.58', '91.72', '72.02', '79.9', '85.86');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('6', 'S002', '1', '85.2', '78.53', '77.99', '78.21', '88.04');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('7', 'S002', '2', '99.2', '95.73', '87.22', '90.62', '82.35');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('8', 'S002', '3', '95.3', '77.93', '73.59', '75.33', '71.34');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('9', 'S002', '4', '89.63', '92.57', '85.09', '88.08', '88.52');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('10', 'S002', '5', '94.53', '96.39', '84.26', '89.11', '89.56');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('11', 'S003', '1', '99.1', '77.56', '96.4', '88.86', '75.01');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('12', 'S003', '2', '91.03', '75.24', '72.28', '73.46', '82.88');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('13', 'S003', '3', '92.24', '74.73', '81.83', '78.99', '97.7');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('14', 'S003', '4', '95.57', '81.62', '88.52', '85.76', '91.92');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('15', 'S003', '5', '91.05', '78.21', '70.66', '73.68', '92.72');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('16', 'S004', '1', '97.11', '89.16', '82.5', '85.16', '73.39');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('17', 'S004', '2', '92.41', '99.97', '92.17', '95.29', '79.72');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('18', 'S004', '3', '88.62', '73.95', '72.07', '72.82', '85.71');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('19', 'S004', '4', '87.05', '88.32', '84.01', '85.73', '72.41');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('20', 'S004', '5', '93.14', '98.18', '74.55', '84', '95.59');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('21', 'S005', '1', '93.12', '70.27', '83.52', '78.22', '80.08');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('22', 'S005', '2', '97.26', '95.78', '86.56', '90.25', '81.59');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('23', 'S005', '3', '92.73', '88.99', '82.84', '85.3', '71.06');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('24', 'S005', '4', '94.79', '78.04', '75.69', '76.63', '96.65');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('25', 'S005', '5', '98.82', '90.18', '73.48', '80.16', '81.96');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('26', 'S006', '1', '89.04', '71.94', '85.96', '80.35', '95.01');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('27', 'S006', '2', '91.79', '71.43', '97.77', '87.23', '97.6');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('28', 'S006', '3', '92.87', '70.48', '85.43', '79.45', '98.22');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('29', 'S006', '4', '98.62', '94.97', '84.19', '88.5', '81.5');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('30', 'S006', '5', '94.66', '81.46', '90.5', '86.88', '73.3');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('31', 'S007', '1', '87.58', '99.04', '89.08', '93.06', '72.77');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('32', 'S007', '2', '94.33', '92.89', '71.83', '80.25', '94.63');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('33', 'S007', '3', '88.43', '97.53', '90.67', '93.41', '81.1');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('34', 'S007', '4', '91.61', '76.05', '79.16', '77.92', '79.76');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('35', 'S007', '5', '86.33', '93.26', '83.99', '87.7', '70.16');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('36', 'S008', '1', '98.44', '89.06', '90.39', '89.86', '72.02');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('37', 'S008', '2', '87.99', '86.99', '87.37', '87.22', '87.57');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('38', 'S008', '3', '92.31', '75.91', '94.21', '86.89', '94.23');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('39', 'S008', '4', '96.65', '97.23', '75.97', '84.47', '77.38');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('40', 'S008', '5', '86.86', '87.77', '96.14', '92.79', '86.08');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('41', 'S009', '1', '94.35', '88.78', '73.41', '79.56', '83.56');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('42', 'S009', '2', '92.14', '79.58', '88.55', '84.96', '93.16');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('43', 'S009', '3', '97.05', '77.18', '74.13', '75.35', '85.36');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('44', 'S009', '4', '91.95', '82.6', '70.4', '75.28', '75.09');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('45', 'S009', '5', '88.83', '76.19', '86.66', '82.47', '89.62');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('46', 'S010', '1', '98.61', '85.19', '89.91', '88.02', '76.62');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('47', 'S010', '2', '90.91', '86.34', '93.87', '90.86', '82.18');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('48', 'S010', '3', '97.58', '94.02', '97.94', '96.37', '80.89');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('49', 'S010', '4', '99.13', '94.63', '91.47', '92.73', '71.02');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('50', 'S010', '5', '92.98', '92.34', '93.48', '93.02', '97.09');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('51', 'S011', '1', '87.06', '99.95', '80.07', '88.02', '86.16');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('52', 'S011', '2', '94.9', '71.69', '89.06', '82.11', '80.78');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('53', 'S011', '3', '91.74', '78.77', '95.25', '88.66', '75.14');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('54', 'S011', '4', '86.62', '83.16', '89.89', '87.2', '93.87');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('55', 'S011', '5', '93.47', '96.51', '82.85', '88.31', '91.73');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('56', 'S012', '1', '95.76', '78.11', '80.81', '79.73', '92.45');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('57', 'S012', '2', '93.27', '87.91', '74.97', '80.15', '78.43');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('58', 'S012', '3', '96.19', '84.02', '81.93', '82.77', '73.3');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('59', 'S012', '4', '99.81', '82.27', '78.3', '79.89', '74.9');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('60', 'S012', '5', '88.55', '90.92', '83.99', '86.76', '86.09');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('61', 'S013', '1', '90.25', '98.21', '84.64', '90.07', '82.49');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('62', 'S013', '2', '87.18', '99.69', '83.75', '90.13', '98.3');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('63', 'S013', '3', '85.48', '72.64', '73.81', '73.34', '85.93');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('64', 'S013', '4', '98.12', '95.06', '97.71', '96.65', '85.49');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('65', 'S013', '5', '94.89', '79.17', '86.94', '83.83', '72.26');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('66', 'S014', '1', '88.35', '92.71', '85.99', '88.68', '77.39');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('67', 'S014', '2', '86.09', '91.69', '71.03', '79.29', '73.56');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('68', 'S014', '3', '94.24', '85.63', '93.97', '90.63', '99.48');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('69', 'S014', '4', '91.25', '91.72', '82.61', '86.25', '71.07');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('70', 'S014', '5', '96.77', '88.45', '79.57', '83.12', '80.25');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('71', 'S015', '1', '87.89', '71.15', '71.31', '71.25', '93.23');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('72', 'S015', '2', '97.53', '97.83', '70.21', '81.26', '79.54');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('73', 'S015', '3', '89.17', '74.57', '85.08', '80.88', '79.94');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('74', 'S015', '4', '96.84', '94.54', '87.17', '90.12', '70.61');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('75', 'S015', '5', '95.83', '75.62', '91.47', '85.13', '79.02');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('76', 'S016', '1', '85.98', '97.93', '78.15', '86.06', '71.24');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('77', 'S016', '2', '96.27', '81.1', '95.02', '89.45', '78.22');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('78', 'S016', '3', '90.65', '89.41', '80.96', '84.34', '93.99');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('79', 'S016', '4', '92.61', '73.63', '87.27', '81.81', '99.96');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('80', 'S016', '5', '97.86', '74.4', '70.76', '72.22', '83.57');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('81', 'S017', '1', '92.1', '72.72', '85.21', '80.21', '87.45');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('82', 'S017', '2', '96.49', '75.47', '72.53', '73.71', '98.65');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('83', 'S017', '3', '93.38', '93.97', '84.97', '88.57', '97.43');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('84', 'S017', '4', '87.15', '87.64', '89.71', '88.88', '95.5');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('85', 'S017', '5', '92.13', '79.34', '78.14', '78.62', '91.47');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('86', 'S018', '1', '99.77', '93.46', '94.06', '93.82', '82.03');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('87', 'S018', '2', '90.62', '78.41', '74.13', '75.84', '97.89');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('88', 'S018', '3', '95.49', '97.24', '99.6', '98.66', '82.69');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('89', 'S018', '4', '89.58', '77.77', '83.83', '81.41', '96.78');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('90', 'S018', '5', '86.26', '85.11', '84.35', '84.65', '76.25');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('91', 'S019', '1', '97.42', '97.9', '96.84', '97.26', '82.26');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('92', 'S019', '2', '93.55', '75.34', '87.27', '82.5', '98.76');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('93', 'S019', '3', '91.11', '78.06', '81.64', '80.21', '87.83');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('94', 'S019', '4', '85.55', '85.54', '88.24', '87.16', '73.72');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('95', 'S019', '5', '99.29', '88.11', '81.29', '84.02', '81.12');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('96', 'S020', '1', '87.53', '86.76', '78.73', '81.94', '81.04');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('97', 'S020', '2', '93.72', '70.51', '78.95', '75.57', '77.63');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('98', 'S020', '3', '87.52', '92.62', '94.33', '93.65', '70.15');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('99', 'S020', '4', '93.3', '96.35', '84.84', '89.44', '79.78');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('100', 'S020', '5', '97.59', '81.01', '89.7', '86.22', '80.38');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('101', 'S021', '1', '87.33', '95.74', '95.16', '95.39', '74.56');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('102', 'S021', '2', '87.83', '82.2', '75.61', '78.25', '89.62');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('103', 'S021', '3', '93.13', '81.63', '80.57', '80.99', '93.38');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('104', 'S021', '4', '91.39', '71.14', '98.18', '87.36', '73.19');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('105', 'S021', '5', '90.62', '86.37', '71.14', '77.23', '90.85');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('106', 'S022', '1', '86.38', '90.42', '70.62', '78.54', '88.83');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('107', 'S022', '2', '95.47', '86.78', '90.3', '88.89', '73.18');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('108', 'S022', '3', '87.54', '76.58', '85.13', '81.71', '96.28');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('109', 'S022', '4', '93.09', '85.51', '88.01', '87.01', '79.53');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('110', 'S022', '5', '97.88', '91.24', '88.29', '89.47', '70.74');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('111', 'S023', '1', '85', '94.83', '94.85', '94.84', '84.34');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('112', 'S023', '2', '96.62', '84.31', '84.09', '84.18', '94.72');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('113', 'S023', '3', '87.05', '91.46', '98.48', '95.67', '73.11');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('114', 'S023', '4', '99.65', '93.01', '98.97', '96.59', '75.2');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('115', 'S023', '5', '89.36', '84.49', '98.89', '93.13', '92.59');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('116', 'S024', '1', '88.92', '83.01', '87.5', '85.7', '70.56');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('117', 'S024', '2', '99.75', '93.92', '88.58', '90.72', '78.82');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('118', 'S024', '3', '89.55', '84.05', '72.75', '77.27', '85.28');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('119', 'S024', '4', '99.1', '87.45', '75.77', '80.44', '72.81');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('120', 'S024', '5', '94.72', '88.21', '96.35', '93.09', '89.12');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('121', 'S025', '1', '88.66', '79.72', '94.85', '88.8', '77.4');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('122', 'S025', '2', '90.34', '70.92', '83.34', '78.37', '71.98');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('123', 'S025', '3', '93.62', '75.62', '92.94', '86.01', '79.79');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('124', 'S025', '4', '93.03', '88.75', '78.42', '82.55', '95.76');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('125', 'S025', '5', '94.2', '83.98', '85.9', '85.13', '70.5');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('126', 'S026', '1', '85.51', '83.55', '89.73', '87.26', '98.97');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('127', 'S026', '2', '89.7', '72.18', '96.75', '86.92', '99.67');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('128', 'S026', '3', '94.47', '85.77', '72.96', '78.08', '94.12');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('129', 'S026', '4', '94.92', '78.43', '77.83', '78.07', '95.66');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('130', 'S026', '5', '91.58', '83.58', '95.07', '90.47', '75.17');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('131', 'S027', '1', '86.75', '87.17', '71.37', '77.69', '91.39');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('132', 'S027', '2', '85.45', '78.12', '78.33', '78.25', '84.93');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('133', 'S027', '3', '89.49', '96.72', '75.97', '84.27', '86.52');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('134', 'S027', '4', '89.91', '92.38', '99.98', '96.94', '72.61');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('135', 'S027', '5', '87.08', '82.05', '97.16', '91.12', '85.16');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('136', 'S028', '1', '90.31', '77.24', '81.04', '79.52', '74.45');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('137', 'S028', '2', '89.3', '80.89', '73.35', '76.37', '71.47');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('138', 'S028', '3', '89.94', '94.06', '77.78', '84.29', '81.92');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('139', 'S028', '4', '98.25', '80.48', '81.44', '81.06', '98.41');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('140', 'S028', '5', '94.07', '79.54', '79.04', '79.24', '89.14');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('141', 'S029', '1', '86.66', '95.22', '78.57', '85.23', '84.9');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('142', 'S029', '2', '86.98', '98.91', '86.91', '91.71', '89.43');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('143', 'S029', '3', '93.17', '81.98', '81.92', '81.94', '89.41');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('144', 'S029', '4', '98.24', '80.24', '97.13', '90.37', '80.87');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('145', 'S029', '5', '86.29', '93.96', '83.94', '87.95', '76.46');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('146', 'S030', '1', '89.33', '93.28', '95.56', '94.65', '95.91');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('147', 'S030', '2', '88.82', '90.47', '88.35', '89.2', '74.88');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('148', 'S030', '3', '96.1', '96.17', '77.82', '85.16', '70.66');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('149', 'S030', '4', '99.63', '75.3', '87.37', '82.54', '77.24');
INSERT INTO student_performance (performance_id, student_id, subject_id, attendance, quiz_avg, exam_score, final_grade, participation) VALUES ('150', 'S030', '5', '85.06', '99.95', '93.65', '96.17', '73.43');
