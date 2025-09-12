// Write an interface name Student that has the following elements:
// firstName, lastName, age, location
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students using the predefined interface
const student1: Student = {
  firstName: "Shakirat",
  lastName: "Akanji",
  age: 25,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Abdulqudus",
  lastName: "Adegbite",
  age: 27,
  location: "Abeokuta",
};

// Create an array named studentsList and add the two students to the array
const studentsList: Student[] = [student1, student2];

// Using Vanilla Javascript, render a table and append it to the DOM.
// The table should have two columns: First Name and Location.
const table = document.createElement("table");

const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
