// Employee object
const employee = {
    name: "John Doe",
    position: "Software Developer",
    salary: 50000, // Default salary
};

// Function to update the salary property
function setSalary(newSalary) {
    employee.salary = newSalary;
    return `Salary updated to $${newSalary}`;
}

// Function to retrieve the salary property
function getSalary() {
    return `Current salary: $${employee.salary}`;
}

// DOM elements
const salaryInput = document.getElementById("salaryInput");
const setSalaryBtn = document.getElementById("setSalaryBtn");
const getSalaryBtn = document.getElementById("getSalaryBtn");
const outputDiv = document.getElementById("output");

// Event listener to set salary
setSalaryBtn.addEventListener("click", () => {
    const newSalary = parseFloat(salaryInput.value);
    if (!isNaN(newSalary) && newSalary > 0) {
        outputDiv.textContent = setSalary(newSalary);
    } else {
        outputDiv.textContent = "Please enter a valid salary.";
    }
});

// Event listener to get salary
getSalaryBtn.addEventListener("click", () => {
    outputDiv.textContent = getSalary();
});
