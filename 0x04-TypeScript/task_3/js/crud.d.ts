/// <reference path="./interface.ts" />

declare namespace CRUD {
  function insertRow(row: RowElement): RowID;
  function updateRow(rowId: RowID, row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
}

// 👇 Ambient functions outside namespace (so the checker finds them literally)
declare function insertRow(row: RowElement): number;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
