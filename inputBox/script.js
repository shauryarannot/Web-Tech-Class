let ageInput = document.getElementById("ageInput").value;
let ageGroupElement = document.getElementById("age-group");
let button = document.querySelector('button');

button.addEventListener('click',function(){
    calculateAgeGroup();
});

function calculateAgeGroup(ageInput) {

    if (ageInput <= 12) {
      ageGroupElement.textContent = "Child";
    } else if (ageInput <= 19) {
      ageGroupElement.textContent = "Teenage";
    } else if (ageInput <= 35) {
      ageGroupElement.textContent = "Young";
    } else {
      ageGroupElement.textContent = "Senior citizen";
    }
}
