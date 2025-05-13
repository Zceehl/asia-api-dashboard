# Student Performance Dashboard

A comprehensive dashboard application that visualizes student performance data across various metrics including attendance, subject performance, grade distribution, and quiz vs exam comparisons.

- Julongbayan, Jeyze D.
- Levita, Vince Howard C.
- Reyes, Andrei L.

## Features

### 1. Interactive Dashboard

- Real-time data visualization
- Responsive design
- Dark/Light mode support
- Interactive charts with hover effects

### 2. Performance Metrics

- **Attendance Trends**: Track attendance rates across subjects
- **Subject Performance**: Compare quiz averages, exam scores, and final grades
- **Grade Distribution**: Visualize grade distribution across subjects
- **Quiz vs Exam Comparison**: Analyze correlation between quiz and exam performance

### 3. Data Visualization

- Bar charts for subject performance
- Line charts for attendance trends
- Pie charts for grade distribution
- Scatter plots for quiz vs exam comparison
- Interactive tooltips showing detailed values

## Tech Stack

### Frontend

- React.js
- Material-UI (MUI)
- Chart.js with react-chartjs-2
- Axios for API calls

### Backend

- Node.js
- Express.js
- MySQL Database
- Sequelize ORM

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd finalasia
```

2. Install dependencies:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up the database:

```bash
# Create a MySQL database
mysql -u root -p
CREATE DATABASE student_performance;
```

4. Configure environment variables:

```bash
# In backend directory, create .env file
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=student_performance
PORT=5000
```

5. Start the application:

```bash
# Start backend server
cd backend
npm start

# Start frontend development server
cd ../frontend
npm start
```

## API Testing

### Using Postman or Similar Tools

1. **Get Attendance Data**

```http
GET http://localhost:5000/api/performance/attendance
```

2. **Get Subject Performance**

```http
GET http://localhost:5000/api/performance/subjects
```

3. **Get Grade Distribution**

```http
GET http://localhost:5000/api/performance/grade-distribution
```

4. **Get Quiz vs Exam Data**

```http
GET http://localhost:5000/api/performance/quiz-exam
```

### Using cURL

1. **Test Attendance Endpoint**

```bash
curl http://localhost:5000/api/performance/attendance
```

2. **Test Subject Performance Endpoint**

```bash
curl http://localhost:5000/api/performance/subjects
```

3. **Test Grade Distribution Endpoint**

```bash
curl http://localhost:5000/api/performance/grade-distribution
```

4. **Test Quiz vs Exam Endpoint**

```bash
curl http://localhost:5000/api/performance/quiz-exam
```

### Expected Response Format

```json
{
  "success": true,
  "data": {
    "labels": ["Subject1", "Subject2", ...],
    "datasets": [
      {
        "label": "Metric Name",
        "data": [value1, value2, ...]
      }
    ]
  }
}
```

## Features in Detail

### 1. Attendance Trends

- Line chart showing attendance rates over time
- Hover to see exact attendance percentages
- Color-coded by subject

### 2. Subject Performance

- Bar chart comparing different performance metrics
- Interactive tooltips showing exact values
- Color-coded metrics (Quiz Average, Exam Score, Final Grade)

### 3. Grade Distribution

- Pie chart showing grade distribution
- Hover to see count and percentage
- Color-coded grades (A, B, C, D, F)

### 4. Quiz vs Exam Comparison

- Scatter plot showing correlation
- Interactive tooltips with both quiz and exam scores
- Color-coded by subject

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- Team Wonderpets 2025
- Chart.js for the visualization library
- Material-UI for the component library
