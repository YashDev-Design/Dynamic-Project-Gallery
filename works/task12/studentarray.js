let students = []; // Array to store multiple student objects

function insertStudentInfo() {
  let student = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    major: document.getElementById("major").value,
    university: document.getElementById("university").value,
    year: document.getElementById("year").value,
    hobbies: document
      .getElementById("hobbies")
      .value.split(",")
      .map((hobby) => hobby.trim()),
  };

  students.push(student); // Add student to the array
  clearInputs(); // Clear input fields after adding a student
}

function updateDisplay() {
  let output = "";

  students.forEach((student, index) => {
    output += `<div class="student-card">
            <strong>Student ${index + 1}</strong><br>
            <strong>Name:</strong> ${student.name} <br>
            <strong>Age:</strong> ${student.age} <br>
            <strong>Major:</strong> ${student.major} <br>
            <strong>University:</strong> ${student.university} <br>
            <strong>Year:</strong> ${student.year} <br>
            <strong>Hobbies:</strong> ${student.hobbies.join(", ")}
        </div>`;
  });

  document.getElementById("demo_div").innerHTML =
    output || "<strong>No student data available.</strong>";
}

function showAllStudents() {
  updateDisplay(); // Display all stored student information
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("major").value = "";
  document.getElementById("university").value = "";
  document.getElementById("year").value = "";
  document.getElementById("hobbies").value = "";
}
