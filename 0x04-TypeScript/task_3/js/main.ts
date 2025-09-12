/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow(row);

// prettier-ignore
const updatedRow: RowElement = { ...row, age: 23 };

updateRow(newRowID, updatedRow);
deleteRow(newRowID);
