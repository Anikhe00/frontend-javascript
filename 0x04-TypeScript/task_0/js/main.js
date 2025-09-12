// Create two students using the predefined interface
var student1 = {
    firstName: "Shakirat",
    lastName: "Akanji",
    age: 25,
    location: "Lagos",
};
var student2 = {
    firstName: "Abdulqudus",
    lastName: "Adegbite",
    age: 27,
    location: "Abeokuta",
};
// Create an array named studentsList and add the two students to the array
var studentsList = [student1, student2];
// Using Vanilla Javascript, render a table and append it to the DOM.
// The table should have two columns: First Name and Location.
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
// Add rows for each student
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// Append the table to the document body
document.body.appendChild(table);
