const performanceController = {
    // Get attendance data by subject
    getAttendanceData: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    s.subject_name,
                    COALESCE(ROUND(AVG(sp.attendance), 2), 0) as attendance,
                    COUNT(DISTINCT sp.student_id) as total_students
                FROM subjects s
                LEFT JOIN student_performance sp ON s.subject_id = sp.subject_id
                GROUP BY s.subject_id, s.subject_name
                ORDER BY FIELD(s.subject_name, 'Mathematics', 'Science', 'English', 'Filipino', 'History')
            `;
            const [results] = await db.query(query);
            res.json(results);
        } catch (error) {
            console.error('Error fetching attendance data:', error);
            res.status(500).json({ error: 'Failed to fetch attendance data' });
        }
    },

    // Get subject performance data
    getSubjectPerformance: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    s.subject_name,
                    COALESCE(ROUND(AVG(sp.quiz_avg), 2), 0) as quiz_avg,
                    COALESCE(ROUND(AVG(sp.exam_score), 2), 0) as exam_score,
                    COALESCE(ROUND(AVG(sp.final_grade), 2), 0) as final_grade,
                    COALESCE(ROUND(AVG(sp.participation), 2), 0) as participation,
                    COUNT(DISTINCT sp.student_id) as total_students
                FROM subjects s
                LEFT JOIN student_performance sp ON s.subject_id = sp.subject_id
                GROUP BY s.subject_id, s.subject_name
                ORDER BY FIELD(s.subject_name, 'Mathematics', 'Science', 'English', 'Filipino', 'History')
            `;
            const [results] = await db.query(query);
            res.json(results);
        } catch (error) {
            console.error('Error fetching subject performance data:', error);
            res.status(500).json({ error: 'Failed to fetch subject performance data' });
        }
    },

    // Get grade distribution
    getGradeDistribution: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    CASE 
                        WHEN final_grade >= 90 THEN 'A'
                        WHEN final_grade >= 80 THEN 'B'
                        WHEN final_grade >= 70 THEN 'C'
                        WHEN final_grade >= 60 THEN 'D'
                        ELSE 'F'
                    END as grade,
                    COUNT(*) as count,
                    ROUND(AVG(final_grade), 2) as avg_grade
                FROM student_performance
                WHERE final_grade IS NOT NULL
                GROUP BY 
                    CASE 
                        WHEN final_grade >= 90 THEN 'A'
                        WHEN final_grade >= 80 THEN 'B'
                        WHEN final_grade >= 70 THEN 'C'
                        WHEN final_grade >= 60 THEN 'D'
                        ELSE 'F'
                    END
                ORDER BY FIELD(grade, 'A', 'B', 'C', 'D', 'F')
            `;
            const [results] = await db.query(query);
            
            // Transform results into array format for chart
            const gradeCounts = ['A', 'B', 'C', 'D', 'F'].map(grade => {
                const gradeData = results.find(r => r.grade === grade);
                return gradeData ? gradeData.count : 0;
            });
            
            res.json({
                counts: gradeCounts,
                details: results
            });
        } catch (error) {
            console.error('Error fetching grade distribution:', error);
            res.status(500).json({ error: 'Failed to fetch grade distribution' });
        }
    },

    // Get quiz vs exam comparison
    getQuizExamComparison: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    s.subject_name,
                    COALESCE(ROUND(AVG(sp.quiz_avg), 2), 0) as quiz_avg,
                    COALESCE(ROUND(AVG(sp.exam_score), 2), 0) as exam_score,
                    COALESCE(ROUND(AVG(sp.final_grade), 2), 0) as final_grade,
                    COUNT(DISTINCT sp.student_id) as total_students
                FROM subjects s
                LEFT JOIN student_performance sp ON s.subject_id = sp.subject_id
                GROUP BY s.subject_id, s.subject_name
                ORDER BY FIELD(s.subject_name, 'Mathematics', 'Science', 'English', 'Filipino', 'History')
            `;
            const [results] = await db.query(query);
            res.json(results);
        } catch (error) {
            console.error('Error fetching quiz-exam comparison:', error);
            res.status(500).json({ error: 'Failed to fetch quiz-exam comparison' });
        }
    },

    // Get gender performance
    getGenderPerformance: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    st.gender,
                    COALESCE(ROUND(AVG(sp.final_grade), 2), 0) as avg_grade,
                    COALESCE(ROUND(AVG(sp.attendance), 2), 0) as avg_attendance,
                    COALESCE(ROUND(AVG(sp.participation), 2), 0) as avg_participation,
                    COUNT(DISTINCT st.student_id) as total_students
                FROM students st
                LEFT JOIN student_performance sp ON st.student_id = sp.student_id
                GROUP BY st.gender
            `;
            const [results] = await db.query(query);
            res.json(results);
        } catch (error) {
            console.error('Error fetching gender performance:', error);
            res.status(500).json({ error: 'Failed to fetch gender performance' });
        }
    },

    // Get participation rates
    getParticipationRates: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    s.subject_name,
                    COALESCE(ROUND(AVG(sp.participation), 2), 0) as participation_rate,
                    COUNT(DISTINCT sp.student_id) as total_students
                FROM subjects s
                LEFT JOIN student_performance sp ON s.subject_id = sp.subject_id
                GROUP BY s.subject_id, s.subject_name
                ORDER BY FIELD(s.subject_name, 'Mathematics', 'Science', 'English', 'Filipino', 'History')
            `;
            const [results] = await db.query(query);
            res.json(results);
        } catch (error) {
            console.error('Error fetching participation rates:', error);
            res.status(500).json({ error: 'Failed to fetch participation rates' });
        }
    },

    // Get overall statistics
    getOverallStats: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    COUNT(DISTINCT st.student_id) as total_students,
                    COUNT(DISTINCT s.subject_id) as total_subjects,
                    COALESCE(ROUND(AVG(sp.final_grade), 2), 0) as overall_avg_grade,
                    COALESCE(ROUND(AVG(sp.attendance), 2), 0) as overall_attendance,
                    COALESCE(ROUND(AVG(sp.participation), 2), 0) as overall_participation,
                    COALESCE(ROUND(AVG(sp.quiz_avg), 2), 0) as overall_quiz_avg,
                    COALESCE(ROUND(AVG(sp.exam_score), 2), 0) as overall_exam_score
                FROM students st
                CROSS JOIN subjects s
                LEFT JOIN student_performance sp ON st.student_id = sp.student_id AND s.subject_id = sp.subject_id
            `;
            const [results] = await db.query(query);
            res.json(results[0]);
        } catch (error) {
            console.error('Error fetching overall statistics:', error);
            res.status(500).json({ error: 'Failed to fetch overall statistics' });
        }
    },

    // Get subject-wise grade distribution
    getSubjectGradeDistribution: async (req, res) => {
        try {
            const db = req.app.locals.db;
            const query = `
                SELECT 
                    s.subject_name,
                    CASE 
                        WHEN sp.final_grade >= 90 THEN 'A'
                        WHEN sp.final_grade >= 80 THEN 'B'
                        WHEN sp.final_grade >= 70 THEN 'C'
                        WHEN sp.final_grade >= 60 THEN 'D'
                        ELSE 'F'
                    END as grade,
                    COUNT(*) as count
                FROM subjects s
                LEFT JOIN student_performance sp ON s.subject_id = sp.subject_id
                WHERE sp.final_grade IS NOT NULL
                GROUP BY 
                    s.subject_name,
                    CASE 
                        WHEN sp.final_grade >= 90 THEN 'A'
                        WHEN sp.final_grade >= 80 THEN 'B'
                        WHEN sp.final_grade >= 70 THEN 'C'
                        WHEN sp.final_grade >= 60 THEN 'D'
                        ELSE 'F'
                    END
                ORDER BY 
                    FIELD(s.subject_name, 'Mathematics', 'Science', 'English', 'Filipino', 'History'),
                    FIELD(grade, 'A', 'B', 'C', 'D', 'F')
            `;
            const [results] = await db.query(query);
            res.json(results);
        } catch (error) {
            console.error('Error fetching subject grade distribution:', error);
            res.status(500).json({ error: 'Failed to fetch subject grade distribution' });
        }
    }
};

module.exports = performanceController; 