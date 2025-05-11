import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Subject color mapping for consistent colors across charts
const subjectColors = {
    'Mathematics': { bg: 'rgba(255, 99, 132, 0.2)', border: 'rgb(255, 99, 132)' },
    'Science': { bg: 'rgba(54, 162, 235, 0.2)', border: 'rgb(54, 162, 235)' },
    'English': { bg: 'rgba(255, 206, 86, 0.2)', border: 'rgb(255, 206, 86)' },
    'Filipino': { bg: 'rgba(75, 192, 192, 0.2)', border: 'rgb(75, 192, 192)' },
    'History': { bg: 'rgba(153, 102, 255, 0.2)', border: 'rgb(153, 102, 255)' }
};

// Subject order for consistent display
const subjectOrder = ['Mathematics', 'Science', 'English', 'Filipino', 'History'];

const api = {
    // Get overall performance statistics
    getOverallStats: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/overall`);
        return response.data;
    },

    // Get subject-wise performance
    getSubjectPerformance: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/subjects`);
        return response.data;
    },

    // Get gender-based performance
    getGenderPerformance: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/gender`);
        return response.data;
    },

    // Get attendance trends
    getAttendanceTrends: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/attendance`);
        return response.data;
    },

    // Get quiz vs exam comparison
    getQuizExamComparison: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/quiz-exam`);
        return response.data;
    },

    // Get participation rates
    getParticipationRates: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/participation`);
        return response.data;
    },

    // Get grade distribution
    getGradeDistribution: async () => {
        const response = await axios.get(`${API_BASE_URL}/performance/grade-distribution`);
        return response.data;
    }
};

export const fetchPerformanceData = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}/performance/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${endpoint} data`);
        }
        const data = await response.json();
        if (!data) {
            throw new Error(`No data received for ${endpoint}`);
        }
        return data;
    } catch (error) {
        console.error(`Error fetching ${endpoint} data:`, error);
        throw error;
    }
};

// Helper function to sort data by subject order
const sortBySubjectOrder = (data) => {
    return [...data].sort((a, b) => {
        return subjectOrder.indexOf(a.subject_name) - subjectOrder.indexOf(b.subject_name);
    });
};

export const formatChartData = (data, type) => {
    if (!data) return null;

    switch (type) {
        case 'attendance':
            const sortedAttendanceData = sortBySubjectOrder(data);
            return {
                labels: sortedAttendanceData.map(item => item.subject_name),
                datasets: [{
                    label: 'Attendance Rate (%)',
                    data: sortedAttendanceData.map(item => item.attendance || 0),
                    backgroundColor: sortedAttendanceData.map(item => subjectColors[item.subject_name].bg),
                    borderColor: sortedAttendanceData.map(item => subjectColors[item.subject_name].border),
                    borderWidth: 1
                }]
            };

        case 'subjects':
            const sortedSubjectData = sortBySubjectOrder(data);
            return {
                labels: sortedSubjectData.map(item => item.subject_name),
                datasets: [
                    {
                        label: 'Quiz Average',
                        data: sortedSubjectData.map(item => item.quiz_avg || 0),
                        backgroundColor: sortedSubjectData.map(item => subjectColors[item.subject_name].bg),
                        borderColor: sortedSubjectData.map(item => subjectColors[item.subject_name].border),
                        borderWidth: 1
                    },
                    {
                        label: 'Exam Score',
                        data: sortedSubjectData.map(item => item.exam_score || 0),
                        backgroundColor: sortedSubjectData.map(item => subjectColors[item.subject_name].bg),
                        borderColor: sortedSubjectData.map(item => subjectColors[item.subject_name].border),
                        borderWidth: 1
                    },
                    {
                        label: 'Final Grade',
                        data: sortedSubjectData.map(item => item.final_grade || 0),
                        backgroundColor: sortedSubjectData.map(item => subjectColors[item.subject_name].bg),
                        borderColor: sortedSubjectData.map(item => subjectColors[item.subject_name].border),
                        borderWidth: 1
                    }
                ]
            };

        case 'grades':
            return {
                labels: ['A', 'B', 'C', 'D', 'F'],
                datasets: [{
                    label: 'Number of Students',
                    data: data.counts || [0, 0, 0, 0, 0],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 99, 132)'
                    ],
                    borderWidth: 1
                }]
            };

        case 'quiz-exam':
            const sortedQuizExamData = sortBySubjectOrder(data);
            return {
                datasets: sortedQuizExamData.map(item => ({
                    label: item.subject_name,
                    data: [{
                        x: item.quiz_avg || 0,
                        y: item.exam_score || 0,
                        subject: item.subject_name,
                        finalGrade: item.final_grade || 0,
                        totalStudents: item.total_students || 0
                    }],
                    backgroundColor: subjectColors[item.subject_name].bg,
                    borderColor: subjectColors[item.subject_name].border,
                    borderWidth: 1,
                    pointRadius: 8,
                    pointHoverRadius: 10
                }))
            };

        case 'gender':
            return {
                labels: data.map(item => item.gender),
                datasets: [
                    {
                        label: 'Average Grade',
                        data: data.map(item => item.avg_grade || 0),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1
                    },
                    {
                        label: 'Average Attendance',
                        data: data.map(item => item.avg_attendance || 0),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        borderWidth: 1
                    },
                    {
                        label: 'Average Participation',
                        data: data.map(item => item.avg_participation || 0),
                        backgroundColor: 'rgba(255, 206, 86, 0.2)',
                        borderColor: 'rgb(255, 206, 86)',
                        borderWidth: 1
                    }
                ]
            };

        case 'participation':
            const sortedParticipationData = sortBySubjectOrder(data);
            return {
                labels: sortedParticipationData.map(item => item.subject_name),
                datasets: [{
                    label: 'Participation Rate (%)',
                    data: sortedParticipationData.map(item => item.participation_rate || 0),
                    backgroundColor: sortedParticipationData.map(item => subjectColors[item.subject_name].bg),
                    borderColor: sortedParticipationData.map(item => subjectColors[item.subject_name].border),
                    borderWidth: 1
                }]
            };

        case 'subject-grades':
            const sortedSubjectGradesData = sortBySubjectOrder(data);
            return {
                labels: ['A', 'B', 'C', 'D', 'F'],
                datasets: subjectOrder.map(subject => ({
                    label: subject,
                    data: ['A', 'B', 'C', 'D', 'F'].map(grade => {
                        const gradeData = sortedSubjectGradesData.find(
                            item => item.subject_name === subject && item.grade === grade
                        );
                        return gradeData ? gradeData.count : 0;
                    }),
                    backgroundColor: subjectColors[subject].bg,
                    borderColor: subjectColors[subject].border,
                    borderWidth: 1
                }))
            };

        default:
            return null;
    }
};

export default api; 