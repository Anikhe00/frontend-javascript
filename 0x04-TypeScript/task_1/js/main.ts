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
