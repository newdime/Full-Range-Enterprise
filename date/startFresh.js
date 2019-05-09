function startFresh() {
  //get properties
  SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').setValue("Reports Running");
   SpreadsheetApp.flush();
  archiveAllDocs();
  copyReportTemplate();
  runFile();
  //get properties
  SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').setValue("Reports Complete");
   SpreadsheetApp.flush();
}
