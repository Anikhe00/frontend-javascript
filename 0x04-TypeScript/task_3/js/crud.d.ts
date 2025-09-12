/// <reference path="./interface.ts" />

declare namespace CRUD {
  function insertRow(row: RowElement): RowID;
  function updateRow(rowId: RowID, row: RowElement): RowID;
  function deleteRow(rowId: RowID): void;
}
