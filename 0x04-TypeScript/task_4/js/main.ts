/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

export const cTeacher: Subjects.Teacher = {
  firstName: "Clement",
  lastName: "N.",
  experienceTeachingC: 10,
};

export const cpp: Subjects.Cpp = new Subjects.Cpp();
console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

export const java: Subjects.Java = new Subjects.Java();
console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react: Subjects.React = new Subjects.React();
console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
