function initial(){
  
  ScriptApp.newTrigger("monthlyTrigger")
  .timeBased()
  .atDate(2019, 4, 15)
  .create();
}

function monthlyTrigger() {
  ScriptApp.newTrigger("runFile")
  .timeBased()
  .everyHours(1344)
  .onWeekDay(ScriptApp.WeekDay.MONDAY)
  .atHour(0)
  .create();
}

function runFile() {
  var Plus = 1;
  
  
  var status = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').getValue();
  SpreadsheetApp.flush();
  while(status != "Schedules Complete")
  {
    //sleep(1000);
    status = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').getValue();
    SpreadsheetApp.flush();
  }
  status = SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').setValue("Resolve Running");
  SpreadsheetApp.flush();
  
  
  
  // Set destination folder
  var scheduleFolder = "109Sgt4zyE5aSYVuh-2sIcp12NHyM4dka";
  var folder = DriveApp.getFolderById(scheduleFolder);
  
  var archiveFolder = "11kupIjywSvE-uXJSj1eaUwWukL3qYGsw";
  var dest = DriveApp.getFolderById(archiveFolder);
  
  // archive and delete files
  // set file to be coppied
  var files = folder.getFiles();
  while (files.hasNext()) 
  {   
    var fileName = files.next();
    var fileToCopy = fileName.getId();
    DriveApp.getFileById(fileToCopy).makeCopy(fileName.getName(),dest); 
    
    var ss = SpreadsheetApp.openById(fileToCopy);
    DriveApp.getFileById(fileToCopy).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.EDIT);
    // near month
    var token = 0;
    
    nameSchedule(ss, token, Plus);
    //toDatabase(Plus,token, ss);
    //wipeData(ss);
  }
  
  // set the formulas in the report schedule
  // importRanges();
  
  SpreadsheetApp.openById('1AoNzKIAqaCTpBcsSUIuWypNp-53l29-n12ncQLMRYEM').getRange('P2').setValue("Resolve Complete");
  SpreadsheetApp.flush();
}