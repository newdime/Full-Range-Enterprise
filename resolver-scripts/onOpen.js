function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .createMenu('Control Panel')
  .addItem('Show sidebar', 'showSidebar')
  .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
  .setTitle('Control Panel')
  .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
  .showSidebar(html);
}

/*function snapShot(){
  var ss = SpreadsheetApp.getActive().getActiveRange();
  var dataVals = ss.getValues();
  ss.setValues(dataVals);
}


function connectDataBase() {

  Resolver.importReportRanges();
  Resolver.importSheduleRanges();
}*/
