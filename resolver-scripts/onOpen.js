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

function snapShot(){
  var ss = SpreadsheetApp.getActive().getActiveRange();
  var dataVals = ss.getValues();
  ss.setValues(dataVals);
}

function pushWeek(){

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var name = ss.getActiveSheet().getName();

  var range = ss.getRangeByName("Data").getValues();

  var formattedDate = Utilities.formatDate(new Date(), "GMT+10","HH:mm:ss dd/MM/yyyy");

  var postFolder = "1EeYuYTH30djnHHk945BzSghzOTEN8bI7";

  var newName = name + " - (" + formattedDate + ")";

  var capture = SpreadsheetApp.create(newName);

  var newID = capture.getId();

  //postFolder.addFile(SpreadsheetApp.create(newName));

  /* var resource = {
  title: newName,
  mimeType: MimeType.GOOGLE_SHEETS,
  parents: [{ id: postFolder }]
  };

  var capture =  Drive.Files.insert(resource);*/

  var data = ss.getActiveSheet().getDataRange().getValues();
 var backgrounds = ss.getActiveSheet().getDataRange().getBackgrounds();
 var bandings = ss.getActiveSheet().getDataRange().getBandings();

 var newSheet = SpreadsheetApp.openById(newID);

  newSheet.getActiveSheet().getRange(ss.getActiveSheet().getDataRange().getA1Notation()).setValues(data);
 newSheet.getActiveSheet().getRange(ss.getActiveSheet().getDataRange().getA1Notation()).setBackgrounds(backgrounds);

   SpreadsheetApp.flush();
  DriveApp.getFileById(newID).makeCopy(newName,DriveApp.getFolderById(postFolder));
  DriveApp.getFileById(newID).setTrashed(true);

  Logger.log( data);
}

function connectDataBase() {

  Resolver.importReportRanges();
  Resolver.importSheduleRanges();
}
