// gpa.js

// Converts letter grade to GPA points
const lookupGrade = (grade) => {
    const gradePoints = { A: 4, B: 3, C: 2, D: 1 };
    return gradePoints[grade.toUpperCase()] || 0;
  };
  
  // Calculates GPA from an array of grades
  const calculateGpa = (grades) => {
    const points = grades.map(lookupGrade);
    const total = points.reduce((sum, point) => sum + point, 0);
    return (total / grades.length).toFixed(2);
  };
  
  // Handles button click
  const clickHandler = () => {
    const grades = document.querySelector("#grades").value
      .split(",")
      .map((grade) => grade.trim().toUpperCase());
  
    const gpa = calculateGpa(grades);
    document.querySelector("#output").innerText = `Your GPA is: ${gpa}`;
  };
  
  // Set up event listener for button click
  document.querySelector("#submitButton").addEventListener("click", clickHandler);
  