let students = []; // Array to store multiple student objects

// Constructor function for Student objects
function Student(name, studentId, age, major, university, year, hobbies) {
  this.name = name || ""; // Default to empty string if not provided
  this.studentId = studentId || "";
  this.age = age || "";
  this.major = major || "";
  this.university = university || "";
  this.year = year || "";
  this.hobbies = hobbies ? hobbies.split(",").map((hobby) => hobby.trim()) : [];
}

// Function to insert a student into the array
function insertStudentInfo() {
  let name = document.getElementById("name").value;
  let studentId = document.getElementById("student_id").value;
  let age = document.getElementById("age").value;
  let major = document.getElementById("major").value;
  let university = document.getElementById("university").value;
  let year = document.getElementById("year").value;
  let hobbies = document.getElementById("hobbies").value;

  // Create new student, allowing fields to be optional
  let new_student = new Student(
    name,
    studentId,
    age,
    major,
    university,
    year,
    hobbies
  );
  students.push(new_student);
}

// Function to show all stored students
function showAllStudents() {
  let output = "";

  if (students.length === 0) {
    output = "<strong>No student data available.</strong>";
  } else {
    students.forEach((student, index) => {
      output += `<div class="student-card" id="student-${index}">
                <strong>Student ${index + 1}</strong><br>
                <strong>Name:</strong> ${student.name || "N/A"} <br>
                <strong>Student ID:</strong> ${student.studentId || "N/A"} <br>
                <strong>Age:</strong> ${student.age || "N/A"} <br>
                <strong>Major:</strong> ${student.major || "N/A"} <br>
                <strong>University:</strong> ${student.university || "N/A"} <br>
                <strong>Year:</strong> ${student.year || "N/A"} <br>
                <strong>Hobbies:</strong> ${
                  student.hobbies.length ? student.hobbies.join(", ") : "N/A"
                }
                <button onclick="removeStudent(${index})">X</button>
            </div>`;
    });
  }

  document.getElementById("demo_div").innerHTML = output;
}

// Function to search students by name or ID
function searchStudents() {
  let searchQuery = document.getElementById("search").value.toLowerCase();
  let filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery) ||
      student.studentId.toLowerCase().includes(searchQuery)
  );

  let output = "";

  if (filteredStudents.length === 0) {
    output = "<strong>No student found.</strong>";
  } else {
    filteredStudents.forEach((student, index) => {
      output += `<div class="student-card" id="student-${index}">
                <strong>Student ${index + 1}</strong><br>
                <strong>Name:</strong> ${student.name || "N/A"} <br>
                <strong>Student ID:</strong> ${student.studentId || "N/A"} <br>
                <strong>Age:</strong> ${student.age || "N/A"} <br>
                <strong>Major:</strong> ${student.major || "N/A"} <br>
                <strong>University:</strong> ${student.university || "N/A"} <br>
                <strong>Year:</strong> ${student.year || "N/A"} <br>
                <strong>Hobbies:</strong> ${
                  student.hobbies.length ? student.hobbies.join(", ") : "N/A"
                }
            </div>`;
    });
  }

  document.getElementById("demo_div").innerHTML = output;
}

// Function to clear input fields
function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("student_id").value = "";
  document.getElementById("age").value = "";
  document.getElementById("major").value = "";
  document.getElementById("university").value = "";
  document.getElementById("year").value = "";
  document.getElementById("hobbies").value = "";
}

// Function to remove one student display at a time (but keep stored data)
function clearDisplay() {
  let studentCards = document.querySelectorAll(".student-card");
  if (studentCards.length > 0) {
    studentCards[studentCards.length - 1].remove(); // Remove only the last displayed student
  }
}

// Function to remove a student from the stored data & update display
function removeStudent(index) {
  students.splice(index, 1); // Remove from stored data
  showAllStudents(); // Refresh display
}
