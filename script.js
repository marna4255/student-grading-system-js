// Function to calculate the class average
function getAverage(scores) {
  let sum = 0;
  for (let score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

// Function to determine the grade based on the score
function getGrade(score) {
  if (score >= 0 && score <= 59) {
    return "F";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score === 100) {
    return "A++";
  }
}

// Function to check if a student has a passing grade
function hasPassingGrade(score) {
  if (score >= 60) {
    return true;
  }
  return false;
}

// Global variables to store student data
let students = [];
let scores = [];

// Function to update the results section in the UI
function updateResults() {
  const classAverage = getAverage(scores).toFixed(1);
  document.getElementById("classAverage").innerText = classAverage;

  // Clear the current list of grades
  const gradesList = document.getElementById("gradesList");
  gradesList.innerHTML = "";

  // Add each student's grade to the list
  students.forEach((student) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${student.name}: ${student.score} - Grade: ${getGrade(
      student.score
    )}${hasPassingGrade(student.score) ? ", Passed" : ", Failed"}`;
    gradesList.appendChild(listItem);
  });
}

// Event listener for adding a student
document.getElementById("addStudentBtn").addEventListener("click", () => {
  const studentName = document.getElementById("studentName").value;
  const studentScore = parseInt(document.getElementById("studentScore").value);

  if (
    studentName &&
    !isNaN(studentScore) &&
    studentScore >= 0 &&
    studentScore <= 100
  ) {
    students.push({ name: studentName, score: studentScore });
    scores.push(studentScore);

    // Clear input fields
    document.getElementById("studentName").value = "";
    document.getElementById("studentScore").value = "";

    // Update the results
    updateResults();
  } else {
    alert("Please enter a valid student name and score (0-100).");
  }
});
