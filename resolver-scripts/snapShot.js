function snapShot(){

  // get the sheet to be captured
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = ss.getActiveSheet().getName();
  var range = ss.getRangeByName("Data").getValues();

  // format the name and create the snapshot
  var formattedDate = Utilities.formatDate(new Date(), "GMT+10","HH:mm:ss dd/MM/yyyy");
  var newName = name + " - (" + formattedDate + ")";
  var capture = SpreadsheetApp.create(newName);
  var newID = capture.getId();

  // copy the data and format the document
  var data = ss.getActiveSheet().getDataRange().getValues();
  var backgrounds = ss.getActiveSheet().getDataRange().getBackgrounds();
  var bandings = ss.getActiveSheet().getDataRange().getBandings();
  //var merged = ss.getActiveSheet().getDataRange().getMergedRanges();

  var newSheet = SpreadsheetApp.openById(newID);

  newSheet.getActiveSheet().getRange(ss.getActiveSheet().getDataRange().getA1Notation()).setValues(data);
  newSheet.getActiveSheet().getRange(ss.getActiveSheet().getDataRange().getA1Notation()).setBackgrounds(backgrounds);
 //newSheet.getActiveSheet().getRange(ss.getActiveSheet().getDataRange().getA1Notation()).applyColumnBanding(bandings);
  //bandings.copyTo( newSheet.getActiveSheet().getRange(ss.getActiveSheet().getDataRange()));
  SpreadsheetApp.flush();

  // get the directory for the snapshot
  var postFolder = "1EeYuYTH30djnHHk945BzSghzOTEN8bI7";

  DriveApp.getFileById(newID).makeCopy(newName,DriveApp.getFolderById(postFolder));
  DriveApp.getFileById(newID).setTrashed(true);

  Logger.log( data);
}
