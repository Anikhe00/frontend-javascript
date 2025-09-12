interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Interface for the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the class methods
interface StudentClassMethods {
  workOnHomework(): string;
  displayName(): string;
}

// The actual class
class StudentClass implements StudentClassMethods {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}

const teacher3: Teacher = {
  firstName: "Adewale",
  lastName: "Ibrahim",
  fullTimeEmployee: false,
  location: "London",
  contract: true,
};

console.log(teacher3);

const director1: Director = {
  firstName: "Eunice",
  lastName: "Okoro",
  fullTimeEmployee: true,
  location: "London",
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// prettier-ignore
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string; }): string {
  return `${firstName}. ${lastName}`;
}
