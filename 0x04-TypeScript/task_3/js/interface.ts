// Create a type RowID and set it equal to number
type RowID = number;

// Create an interface RowElement that contains these 3 fields:
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export { RowID, RowElement };
