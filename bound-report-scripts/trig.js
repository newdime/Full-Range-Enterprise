function trig() {
  ScriptApp.newTrigger('webCall')
  .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
  .onEdit()
  .create();
}
