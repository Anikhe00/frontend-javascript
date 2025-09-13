namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // prettier-ignore
    set setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}
