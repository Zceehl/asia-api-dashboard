const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performance');

// Get attendance data by subject
router.get('/attendance', performanceController.getAttendanceData);

// Get subject performance data
router.get('/subjects', performanceController.getSubjectPerformance);

// Get grade distribution
router.get('/grade-distribution', performanceController.getGradeDistribution);

// Get quiz vs exam comparison
router.get('/quiz-exam', performanceController.getQuizExamComparison);

// Get student performance by gender
router.get('/gender-performance', performanceController.getGenderPerformance);

// Get participation rates
router.get('/participation', performanceController.getParticipationRates);

// Get overall statistics
router.get('/overall', performanceController.getOverallStats);

// Get subject-wise grade distribution
router.get('/subject-grades', performanceController.getSubjectGradeDistribution);

module.exports = router; 