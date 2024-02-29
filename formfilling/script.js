var calculateButton = document.getElementById("calculateButton");
    
    calculateButton.addEventListener("click", function() {
      calculateGrade();
    });
    
function calculateGrade() {
    var name = document.getElementById("name").value;
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    var subject3 = parseFloat(document.getElementById("subject3").value);
    var subject4 = parseFloat(document.getElementById("subject4").value);
    var subject5 = parseFloat(document.getElementById("subject5").value);
  
    var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    var averageMarks = totalMarks / 5;
  
    var grade;
  
    if (averageMarks >= 90) {
      grade = "A+";
    } else if (averageMarks >= 80) {
      grade = "A";
    } else if (averageMarks >= 70) {
      grade = "B";
    } else if (averageMarks >= 60) {
      grade = "C";
    } else if (averageMarks >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    var result = "Name: " + name + "<br>" +
                 "Total Marks: " + totalMarks + "<br>" +
                 "Average Marks: " + averageMarks.toFixed(2) + "<br>" +
                 "Grade: " + grade;
  
    document.getElementById("result").innerHTML = result;
}
  