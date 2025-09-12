// Create the DirectorInterface interface with the 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Create the TeacherInterface interface with the 3 expected methods:
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create a function createEmployee with the following requirements:
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
}

// Write a function isDirector that accepts employee as a parameter
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Write a function executeWork that accepts employee as a parameter
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Write a String literal type named Subjects allowing a variable to have the value Math or History only.
type Subjects = "Math" | "History";

//Write a function named teachClass:
function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));
