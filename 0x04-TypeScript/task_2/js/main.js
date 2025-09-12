// Create a class Director that will implement DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Create a class Teacher that will implement TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Create a function createEmployee with the following requirements:
function createEmployee(salary) {
    if (typeof salary === "number") {
        if (salary < 500) {
            return new Teacher();
        }
        else {
            return new Director();
        }
    }
}
// Write a function isDirector that accepts employee as a parameter
function isDirector(employee) {
    return employee instanceof Director;
}
// Write a function executeWork that accepts employee as a parameter
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
//Write a function named teachClass:
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
